'use strict';
/* global __dirname module require*/
/* eslint comma-dangle: ["error", "never"] */
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/dorel-app.html'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build/es6')
  },
  optimization: {
    minimize: false
  },
  resolve: {
    modules: ['node_modules', 'node_modules'],
    descriptionFiles: ['package.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'polymer-webpack-loader'
          }
        ]
      },
      {
        test: /\.(svg|eot|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/webpack/',
              name: '[name].[ext]',
              publicPath: '/assets/webpack/'
            }
          }
        ]
      },
      {
        test: require.resolve('./node_modules/polymer-redux/lib/index.js'),
        use: 'exports-loader?PolymerRedux'
      },
      {
        test: /intl-messageformat.min.js/,
        use: 'imports-loader?this=>window'
      }
    ]
  }
};
