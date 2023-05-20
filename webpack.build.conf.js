const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');

const buildWebpackConfig = merge(baseWebpackConfig, {
  //!!!
  //CAUTION Production config
  //!!!
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_API_FB_KEY: JSON.stringify(process.env.REACT_APP_API_FB_KEY),
        REACT_APP_FB_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_FB_AUTH_DOMAIN),
        REACT_APP_FB_DATABASE_URL: JSON.stringify(process.env.REACT_APP_FB_DATABASE_URL),
        REACT_APP_FB_PROJECT_ID: JSON.stringify(process.env.REACT_APP_FB_PROJECT_ID),
        REACT_APP_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
        REACT_APP_FB_MESSAGING_SENDER_ID: JSON.stringify(process.env.REACT_APP_FB_MESSAGING_SENDER_ID),
      },
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});