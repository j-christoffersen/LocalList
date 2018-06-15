# LocalList

An app to help match odd job seekers and providers based on geographic location

## Team

  - Jackson Christoffersen
  - Brandon Hadler
  - Jinxuan Lin
  - Sean Gurson

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Style Guide](#style-guide)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Requirements

- Node 6.4.x
- Postgresql 9.1.x

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

### Style Guide
This repo uses the Airbnb style guide
#### Sublime:
Using Package Control:
- Install SublimeLinter
- Install SublimeLinter-config-eslint

### Environment

To set up your environoment correctly on your machine, you need to set up PostgreSQL with a database named 'locallist'.

You will also need to export the following environment variables:
- DB_USERNAME: PSQL user with access to locallist db
- DB_PASSWORD: Password for the aforementioned user
- DATABASE_URL: Production/staging only, replaces DB_USERNAME and DB_PASSWORD
- SESSION_SECRET: Production/staging only, secret sed to encrypt session token

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
