# Shelfmark - Book Management System

Shelfmark is a self-hosted book management and organization system designed for managing your digital book collection with ease and efficiency.

## Key Features

### Book Management 📚
- Organize and manage your digital book collection
- Modern, intuitive web interface
- Search and filter capabilities

### Automatic Download & Organization 📥
- Automatic book downloading and organization
- Support for torrents and usenet downloads
- Intelligent file naming and categorization

### Configuration Management ⚙️
- Centralized configuration for your book library
- Customizable settings and preferences
- Support for multiple download sources

### System Requirements
- Docker and Docker Compose
- Minimum 2GB RAM recommended
- Supported on x86-64 and ARM64 architectures

## Quick Start

### Initial Setup
1. Access the web interface at `http://localhost:8084`
2. Configure your book library paths
3. Set up download sources and clients
4. Start organizing your book collection

## Volumes

- `/config` - Application configuration and database
- `/books` - Default destination for book downloads and library
- `/var/log/shelfmark` - Application logs
- `/tmp/shelfmark` - Temporary files

## Environment Variables

- `PUID` - User ID (default: 1000)
- `PGID` - Group ID (default: 1000)
- `TZ` - Timezone (default: UTC)

## Additional Notes

For setup with torrent or usenet download clients, ensure the volume paths match exactly between Shelfmark and your download client configuration.

For more information, visit [Shelfmark GitHub Repository](https://github.com/calibrain/shelfmark)
