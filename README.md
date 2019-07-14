# Vue starter 🚀
This is an example webpack configuration for project kickoff

## Details
* Clean and Flat folder structure
* Contains only necessary stuff to run Vue (prevent overuse)
* Seperated webpack loaders and plugins
* JS, Vue, SVG, SCSS Support
* Base styles like `_variables.scss` and `_mixins.scss` are available in all components
* Eslint with config

## Folder Structure
```
vue-starter/
├── config/
│   ├── helpers/
│   ├── loaders/
│   ├── plugins/
│   ├── index.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── dist/
└── src/
    ├── assets/
    ├── components/
    ├── index.html
    └── index.js
```

## Requirements
* Node 10.16 or higher

## Running

Installation
```terminal
yarn
```

Development mode
```
yarn dev
```

Production mode
```
yarn build
```
