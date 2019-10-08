const withLess = require('@zeit/next-less');

const { API_URL } = process.env

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  env: {
    API_URL
  },
});