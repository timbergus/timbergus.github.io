const webpack = require('webpack');
const { resolve } = require('path');

const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports.entry = app => ({
  entry: { app }
});

module.exports.outputDev = path => {

  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html')
  });

  return {
    output: {
      path,
      filename: '[name].[chunkhash].js'
    },
    plugins: [plugin]
  };
};

module.exports.outputProd = path => {

  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html'),
    filename: resolve('index.html')
  });

  return {
    output: {
      path,
      filename: '[name].[chunkhash].js'
    },
    plugins: [plugin]
  };
};

module.exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: resolve('src', 'images'),
    compress: true,
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: true
  }
});

module.exports.loadJSX = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.jsx?$/,
      include,
      exclude,
      use: ['babel-loader']
    }]
  }
});

// To use PostCSS we need to add the "postcss-loader" and a configuration file
// called "postcss.config.js" with the plugins we are going to use.

module.exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      exclude,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  }
});

module.exports.extractCSS = ({ include, exclude, use } = {}) => {

  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: '[name].[chunkhash].css'
  });

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,
        use: plugin.extract({
          use,
          fallback: 'style-loader'
        })
      }]
    },
    plugins: [plugin]
  };
};

module.exports.loadPNG = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.png$/,
      include,
      exclude,
      use: {
        loader: 'url-loader',
        options: {
          query: {
            mimetype: 'image/png'
          }
        }
      }
    }]
  }
});

module.exports.notify = () => ({
  plugins: [
    new SystemBellPlugin(),
    new WebpackNotifierPlugin({
      contentImage: resolve('src', 'images', 'favicon.png')
    })
  ]
});

module.exports.uglifyJS = () => {
  const plugin = new webpack.optimize.UglifyJsPlugin();
  return {
    plugins: [plugin]
  };
};

module.exports.purifyCSS = paths => {
  const plugin = new PurifyCSSPlugin({ paths });
  return {
    plugins: [plugin]
  };
};

module.exports.extensions = () => ({
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
});

module.exports.alias = () => ({
  resolve: {
    alias: {
      components: resolve('src', 'app', 'components')
    }
  }
});
