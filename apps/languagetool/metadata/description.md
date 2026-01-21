# LanguageTool

LanguageTool is a free open-source spell checker, style checker, and grammar checker that supports multiple languages. It helps you detect and fix spelling errors, grammar issues, and provides style suggestions.

## Key Features

### Multi-Language Support 🌍
- Supports multiple languages: English, German, Spanish, French, Dutch, and more
- Download language-specific ngrams for improved detection
- Automatic language detection using FastText

### Grammar & Style Checking ✍️
- Detects spelling errors
- Identifies grammar mistakes
- Provides style suggestions
- Real-time feedback as you type

### Customizable Performance 🚀
- Configurable Java heap size for different system resources
- Support for garbage collector selection
- FastText integration for advanced language detection

### Self-Hosted & Private 🔒
- Keep your writing completely private
- No data sent to external services
- Full control over configuration

## Quick Start

### Access the Interface
- Open your browser and navigate to `http://localhost:8081`
- Start checking your text for spelling, grammar, and style issues

### Configuration

#### Language Models
Set the `download_ngrams_for_langs` environment variable to download language models:
- Supported languages: `en`, `de`, `es`, `fr`, `nl`
- Example: `en,de,es` to download English, German, and Spanish models

#### Java Memory Settings
- `JAVA_XMS`: Minimum Java heap size (default: 256m)
- `JAVA_XMX`: Maximum Java heap size (default: 1536m)

Adjust these values based on your system resources and performance needs.

#### Advanced Options
- `JAVA_GC`: Garbage collector selection (SerialGC, ParallelGC, G1GC, ZGC, ShenandoahGC)
- `langtool_languageModel`: Custom path for ngrams data (default: /ngrams)
- `langtool_fasttextModel`: Custom path for FastText model (default: /fasttext/lid.176.bin)

## Data Volumes

- **ngrams**: Language model data for improved detection accuracy
- **fasttext**: FastText model for language detection

These volumes are optional but recommended for better performance and language support.

## Resources

- [LanguageTool Official Website](https://languagetool.org/)
- [Docker Image Repository](https://github.com/meyayl/docker-languagetool)
- [LanguageTool GitHub](https://github.com/languagetoolorg/languagetool)
