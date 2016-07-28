/**
 * Copyright 2016 Arundo Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

module.exports = {
    "env":{
        "node": true,
        "mocha": true
    },
    "extends": ["plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-parens": [2, "always"],
        "comma-dangle": [2, "always-multiline"],
        "indent": [2, 4],
        "jsx-quotes": 2,
        "max-len": [1, 120, 4],
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
        "space-before-blocks": [2, "never"]
    }
};

