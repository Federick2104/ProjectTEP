const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output:
  {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  plugins:
    [
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve(__dirname, '../src/img'),
          to: path.resolve(__dirname, '../dist/img')
        }, {
          from: path.resolve(__dirname, '../src/texture'),
          to: path.resolve(__dirname, '../dist/texture')
        }, {
          from: path.resolve(__dirname, '../src/css'),
          to: path.resolve(__dirname, '../dist/css')
        }
        ]
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/html/index.html'),
        filename: 'index.html',
        minify: true
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/html/game.html'),
        filename: 'game.html',
        minify: true
      }),
      new MiniCssExtractPlugin()
    ]

}
