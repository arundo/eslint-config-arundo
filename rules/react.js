module.exports = {
    plugins: 'react',
    extends: 'plugin:react/recommended',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    ecmaFeatures: {
        jsx: true,
    },
    "rules": {
        "react/jsx-boolean-value": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": 2,
        "react/jsx-equals-spacing": 2,
        "react/jsx-filename-extension": 1,
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-handler-names": [1, {"eventHandlerPrefix": "on"}],
        "react/jsx-indent": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-key": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-literals": 2,
        "react/jsx-no-target-blank": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": 1,
        "react/jsx-space-before-closing": 2,
        "react/no-comment-textnodes": 2,
        "react/no-multi-comp": 2,
        "react/no-render-return-value": 2,
        "react/no-set-state": 1,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 2,
        "react/prefer-stateless-function": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "react/sort-prop-types": 1,
        "react/require-extension": 2,
        "react/require-render-return": 2,
        "react/wrap-multilines": 2,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json'],
            },
        },
        react: {
            pragma: 'React',
            version: '15',
        },
    },
};

