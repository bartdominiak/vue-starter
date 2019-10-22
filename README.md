# Vue starter 🚀
This is an example webpack configuration for project kickoff

## Details
* Clean and Flat folder structure
* Contains only necessary stuff to run Vue (prevent overuse)
* Seperated webpack loaders and plugins
* JS, Vue, SVG, SCSS Support
* Base styles like `_variables.scss` and `_mixins.scss` are available in all components
* Eslint
* Autoprefixer

## Folder Structure
```
vue-starter/
├── config/
│   ├── aliases/
│   ├── loaders/
│   ├── plugins/
│   └── index.js
├── helpers/
└── src/
    ├── assets/
    ├── components/
    ├── index.html
    └── index.js
```

## Requirements
* Node 10 or higher

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
