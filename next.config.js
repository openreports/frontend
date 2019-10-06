const withLess = require('@zeit/next-less');

const { API_URL } = process.env

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  publicRuntimeConfig: {
    API_URL
  },
});