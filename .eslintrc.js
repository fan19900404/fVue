module.exports = {
  root: true,
  env: {
    es6: true,
    // browser: true,
    // jquery: true,
  },
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    'no-underscore-dangle': [0],
    'no-param-reassign': [0],
    'prefer-const': [0],
  },
  globals: {
    // WeixinJSBridge: true,
  },
};
