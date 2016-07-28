> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Arundo](http://arundo.com)

## Install

```
$ npm install --save-dev eslint arundo/eslint-config-arundo
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
    "devDependencies": {
        "eslint": "^2.7.0",
        "eslint-config-arundo": "^0.5.0"
    },
    "eslintConfig": {
        "extends": "arundo"
    }
}
```

Then lint with `$ npm run lint`.


## License

Apache-2 © Arundo
