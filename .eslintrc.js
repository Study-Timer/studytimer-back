module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    camelcase: 'off',
    treatUndefinedAsUnspecified: 0,
    'no-unused-vars': 'off',
    ignoreComments: 0,
    'no-console': 1,
  },
};
