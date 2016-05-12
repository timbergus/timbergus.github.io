var path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "app", "index.jsx"),
  output: {
    path: path.join(__dirname, "web"),
    publicPath: "/web",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    progress: true,
    color: true,
    contentBase: __dirname,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: "style!css!stylus"
      },
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
}
