# config.json
```json
{
 "$schema": "../app-info-schema.json",
 "name": "Calibre-Web - EBook Reader",
 "available": true,
 "exposable": true,
 "dynamic_config": true,
 "port": 8100,
 "tipi_version": 16,
 "version": "0.6.25",
 "id": "calibre-web",
 "categories": ["books"],
 "description": "On the initial setup screen, enter /calibre as your calibre library location, check box Separate Book Files from Library, then e
ter /books. \n Default admin login: Username: admin Password: admin123",
 "short_desc": "Calibre-web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre datab
se.",
 "author": "https://github.com/janeczku/",
 "source": "https://github.com/janeczku/calibre-web",
 "form_fields": [],
 "supported_architectures": ["arm64", "amd64"],
 "created_at": 1691943801422,
 "updated_at": 1761338378451,
 "min_tipi_version": "4.5.0"
 }
 ```

# docker-compose.json
```json
{
    "services": [
      {
        "name": "calibre-web",
        "image": "lscr.io/linuxserver/calibre-web:0.6.25",
        "isMain": true,
        "internalPort": 8083,
        "environment": [
          {
            "key": "PUID",
            "value": "1000"
          },
          {
            "key": "PGID",
            "value": "1000"
          },
          {
            "key": "TZ",
            "value": "${TZ}"
          }
        ],
        "volumes": [
          {
            "hostPath": "${APP_DATA_DIR}/data/config",
            "containerPath": "/config"
           },
          {
            "hostPath": "${APP_DATA_DIR}/data/calibre",
            "containerPath": "/calibre"
          },
          {
            "hostPath": "${ROOT_FOLDER_HOST}/media/data/books",
            "containerPath": "/books"
          }
        ]
      }
    ],
    "schemaVersion": 2,
    "$schema": "https://schemas.runtipi.io/v2/dynamic-compose.json"
  }