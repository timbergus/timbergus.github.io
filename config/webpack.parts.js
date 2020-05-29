const { resolve } = require('path');

const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.entry = app => ({
  entry: { app }
});

module.exports.output = path => {

  const plugin = new HtmlWebpackPlugin({
    template: resolve('src', 'index.html'),
    filename: resolve('index.html'),
    favicon: resolve('src', 'images', 'favicon.png'),
  });

  return {
    output: {
      path,
      filename: '[name].[chunkhash].js',
      publicPath: resolve('dist'),
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

  const plugin = new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css'
  });

  return {
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,
        use: [
          MiniCssExtractPlugin.loader,
          ...use
        ]
      }]
    },
    plugins: [plugin]
  };
};

module.exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(jpg|png|svg)$/,
      include,
      exclude,
      use: [
        {
          loader: 'image-trace-loader',
          options: {
            color: '#cacaca'
          }
        },
        {
          loader: 'url-loader',
          options
        }
      ]
    }]
  }
});

module.exports.loadWASM = () => ({
  module: {
    rules: [{
      // test: /\.wasm$/,
      // use: ['wasm-loader']
      test: /\.wasm$/,
      type: 'webassembly/experimental'
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
      images: resolve('src', 'images'),
      components: resolve('src', 'app', 'components'),
      utils: resolve('src', 'app', 'utils')
    }
  }
});
