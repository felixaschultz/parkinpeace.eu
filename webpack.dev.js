const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
});