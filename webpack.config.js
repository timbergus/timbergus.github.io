const glob = require('glob');
const merge = require ('webpack-merge');
const { resolve } = require('path');

const {
  entry,
  outputDev,
  outputProd,
  devServer,
  loadJSX,
  loadCSS,
  extractCSS,
  loadPNG,
  notify,
  uglifyJS,
  purifyCSS,
  extensions,
  alias
} = require ('./config/webpack.parts');

module.exports = env => {
  return merge([
    entry(resolve('src', 'app', 'index.jsx')),
    env.dev && outputDev(resolve('dist')),
    env.prod && outputProd(resolve('dist')),
    env.dev && devServer({
      host: '0.0.0.0',
      port: 3000
    }),
    loadJSX({
      include: resolve('src'),
      exclude: /node_modules/
    }),
    env.dev && loadCSS({
      include: resolve('src'),
      exclude: /node_modules/
    }),
    env.prod && extractCSS({
      include: resolve('src'),
      exclude: /node_modules/,
      use: [
        'css-loader',
        'postcss-loader'
      ]
    }),
    loadPNG({
      include: resolve('src'),
      exclude: /node_modules/
    }),
    notify(),
    uglifyJS(),
    purifyCSS(glob.sync(resolve('src', 'app', '**', '*'), {
      nodir: true
    })),
    extensions(),
    alias()
  ]);
};
