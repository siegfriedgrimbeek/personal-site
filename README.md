# siegfriedgrimbeek

> Siegfried Grimbeek Website

[www.siegfriedgrimbeek.co.za](https://www.siegfriedgrimbeek.co.za/) 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production with minification and deploy, see release notes below.
npm run deploy

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## To Do
- Refactor code
- Add headline transition animations
- Add page transition animations
- Create about me page
- Create current projects page
- Instagram integration?
- Medium blog posts integration?
- Location based responsiveness?
- Unit tests
- ~~CI/CD Integration~~ Deploys to FTP
- Deploy to Heroku
- Possible converstion to MEVN App
- Tweet on deployment?
- Adhere to logical release versioning
- Create Wiki with release notes?
- Auto readme.md update CI/CD to git?

## Release Notes
### Release 1.1
- Added integrated FTP deployment scripts
  - Need to add './private/config.js' file with the FTP settings as follows:

```
  'use strict'
  module.exports = {
    ftp_settings: {
      username: 'username',
      password: 'password',
      host: 'ftp.server.com',
      port: 21,
      localRoot: './dist',
      remoteRoot: '/',
      exclude: ['.git', '.idea', 'tmp/*', 'build/*', '.DS_Store']
    }
  }

```
