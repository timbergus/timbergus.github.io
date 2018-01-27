const webpack = require('webpack');
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => ({
  entry: {
    app: resolve('src', 'index.jsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: resolve('src', 'images'),
    compress: true,
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    rules: [
      {
        test : /\.jsx?$/,
        exclude : /node_modules/,
        use : 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles.[chunkhash].css'),
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html')
    }),
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      filename: resolve('index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      components: resolve('src', 'app')
    }
  }
});
