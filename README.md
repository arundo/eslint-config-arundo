# eslint-config-arundo

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Arundo](http://arundo.com)

[![Build Status](https://travis-ci.com/arundo/eslint-config-arundo.svg?token=XyjzZE6w4GXXwTsGpxxG&branch=develop)](https://travis-ci.com/arundo/eslint-config-arundo)

## Installation

Run the following command to install this config in your project as a dev dependency

```
npm i -D eslint-config-arundo
```

# Development

Main overrides live in the `./src` directory. Travis CI will build source and output it into `./lib`, which should not be tracked in VCS. Additionally, this `./lib` folder is where node will look when importing rules as it is consumed by clients.

### NPM scripts

| command | args | purpose |
|---|---|---|
| `npm test` |  | Runs [istanbul](https://istanbul.js.org/) and [mocha](https://mochajs.org/) |
| `npm run test:watch` | `-- <file path>` | Runs [mocha](https://mochajs.org/) without coverage on a certain dir with the `--watch` flag |
|`npm run build` |  | Runs [babel](https://babeljs.io/) to compile ECMA script to ES5 |


