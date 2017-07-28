module.exports = {
  extends: ['airbnb-base'],
  rules: {
    "indent": [ 2, 2, { "SwitchCase": 1} ],
    "max-len": [1, 120, 4],
    "comma-dangle": [2, 'always-multiline'],
    "no-underscore-dangle": 1,
    "no-plusplus": 1,
    "import/no-extraneous-dependencies": [2, { }],
  },
};
