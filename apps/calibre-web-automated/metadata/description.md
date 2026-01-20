# Calibre Web Automated

Calibre-Web Automated (CWA) is an all-in-one self-hosted digital library solution that combines the modern lightweight web UI from Calibre-Web with the robust, versatile feature set of Calibre, with a slew of extra features and automations thrown in on top.

## Key Features

### Automatic Ingest Service ✨
- Automatic ingest of 27 different popular ebook formats
- Files are automatically analyzed, converted if necessary, and imported into your library

### Automatic Conversion Service 🔃
- Convert between multiple formats (EPUB, MOBI, AZW3, KEPUB, PDF)
- Supports 28+ file types for conversion
- Configure which formats to automatically convert on ingest

### Automatic Enforcement of Covers & Metadata 👀📔
- Changes made in the web UI are applied to the actual ebook files
- Ensures metadata and covers sync across all your devices

### Additional Features
- **Batch Editing & Deletion** 🗂️ - Edit multiple books at once
- **Automated Backup Service** 🔒 - Automatic backups of processed files
- **EPUB Fixer** 🔨 - Fixes encoding, hyperlinks, and compatibility issues
- **Server Stats** 📊 - Track automation metrics
- **Library Auto-Detect** 📚 - Automatically finds and configures your Calibre library
- **KOReader Syncing** 📖⚡ - Sync reading progress with KOReader devices
- **Enhanced OAuth 2.0/OIDC** 🔐 - Advanced authentication options
- **Dark/Light Mode** ☀️🌙 - Easy theme switching
- **Auto-Compression** 🤐 - Automatic compression of backup files

## Quick Start

### Default Login Credentials
- **Username:** admin
- **Password:** admin123

### Initial Setup
1. Access the web interface at `http://localhost:8083`
2. Log in with default credentials
3. Configure basic settings in the Admin panel
4. Set up CWA-specific features (auto-convert, auto-ingest, etc.)
5. Mount your Calibre library, config folder, and ingest folder
6. Drop books into the ingest folder to test

## Environment Variables

- `PUID` - User ID (default: 1000)
- `PGID` - Group ID (default: 1000)
- `TZ` - Timezone (default: UTC)
- `NETWORK_SHARE_MODE` - Set to true if library is on NFS/SMB (default: false)
- `CWA_PORT_OVERRIDE` - Override default port 8083
- `HARDCOVER_TOKEN` - Optional Hardcover API key for metadata
- `TRUSTED_PROXY_COUNT` - Number of proxy layers to trust (default: 1)

## Volume Bindings

- `/config` - Configuration and logs
- `/calibre-library` - Your Calibre library with metadata.db
- `/cwa-book-ingest` - Folder for ingesting new books (files are deleted after processing)
- `/config/.config/calibre/plugins` - Calibre plugins (optional)

## Important Notes

⚠️ **File Ownership**: Ensure files in ingest folder are owned by your user, not root

⚠️ **Network Shares**: SQLite-based applications don't perform well on NFS/SMB. Set `NETWORK_SHARE_MODE=true` if needed

⚠️ **Ingest Folder**: All files placed in `/cwa-book-ingest` are deleted after processing. Download files completely before moving them here.

## Documentation

For more information, visit: https://github.com/crocodilestick/Calibre-Web-Automated
