# Angular 2/TypeScript/Dgeni/Webpack Starter

This is the initial version of our starter project using Angular 2.x, Dgeni, TypeScript and Webpack to tie it all together.

## Quickstart
To run a development server run the following command. The initial site will only show an angular 2 button component.

### Dev
```bash
$ npm run dev
```

## How to generate documentation
To populate the starter site with documentation, a repo with files containing jsdocs must be placed at the same root
directory as this project. It's name must also be specified in `dgeni-templates/dgeni-package.js`.

#### Building partial templates for angular 2 components
```bash
$ npm run docs
```
If this command is not called, the starter site will have no content, but its app shell will still be visible.

## npm scripts

> To see all available scripts:
```bash
$ npm run
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
$ npm install
$ npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run (with linting and coverage)
```bash
$ npm test
# or
$ npm t
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```
