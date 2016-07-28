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

module.exports = {
    "env":{
        "node": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    extends: [
        './rules/eslint',
        './rules/react',
    ].map(require.resolve),
    // Rules are categorically managed by the files extended above
    rules: {},
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
