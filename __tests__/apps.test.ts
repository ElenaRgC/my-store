import { expect, test, describe } from "bun:test";
import { appInfoSchema, dynamicComposeSchema } from '@runtipi/common/schemas'
import { fromError } from 'zod-validation-error';
import fs from 'node:fs'
import path from 'node:path'

const getApps = async () => {
  const appsDir = await fs.promises.readdir(path.join(process.cwd(), 'apps'))

  const appDirs = appsDir.filter((app) => {
    const stat = fs.statSync(path.join(process.cwd(), 'apps', app))
    return stat.isDirectory()
  })

  return appDirs
};

const getFile = async (app: string, file: string) => {
  const filePath = path.join(process.cwd(), 'apps', app, file)
  try {
    const file = await fs.promises.readFile(filePath, 'utf-8')
    return file
  } catch (err) {
    return null
  }
}

describe("each app should have the required files", async () => {
  const apps = await getApps()

  for (const app of apps) {
    const files = ['config.json', 'docker-compose.json', 'metadata/logo.jpg', 'metadata/description.md']

    for (const file of files) {
      test(`app ${app} should have ${file}`, async () => {
        const fileContent = await getFile(app, file)
        expect(fileContent).not.toBeNull()
      })
    }
  }
})

describe("each app should have a valid config.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid config.json`, async () => {
      const fileContent = await getFile(app, 'config.json')
      const parsed = appInfoSchema.omit({ urn: true }).safeParse(JSON.parse(fileContent || '{}'))

      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        console.error(`Error parsing config.json for app ${app}:`, validationError.toString());
      }

      expect(parsed.success).toBe(true)
    })
  }
})

describe("each app should have a valid docker-compose.json", async () => {
  const apps = await getApps()

  for (const app of apps) {
    test(`app ${app} should have a valid docker-compose.json`, async () => {
      const fileContent = await getFile(app, 'docker-compose.json')
      const content = JSON.parse(fileContent || '{}')
      
      // Normalize environment arrays to objects for schema validation
      if (content.services && Array.isArray(content.services)) {
        content.services = content.services.map((service: any) => {
          if (Array.isArray(service.environment)) {
            // Convert array format [{ key, value }] to object format { key: value }
            const envObj: Record<string, string> = {}
            service.environment.forEach((env: { key: string; value: string }) => {
              envObj[env.key] = env.value
            })
            return { ...service, environment: envObj }
          }
          return service
        })
      }
      
      const parsed = dynamicComposeSchema.safeParse(content)

      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        console.error(`Error parsing docker-compose.json for app ${app}:`, validationError.toString());
      }

      expect(parsed.success).toBe(true)
    })
  }
});
