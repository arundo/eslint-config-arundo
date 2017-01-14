module.exports = {
  extends: ['airbnb-base'],
  rules: {
    "indent": [ 2, 2, { "SwitchCase": 1} ],
    "space-before-blocks": [2, "never"],
    "max-len": [1, 120, 4],
    "comma-dangle": [2, 'always-multiline'],
    "import/no-extraneous-dependencies": [2, { }],
  },
};
