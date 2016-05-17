var path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "app", "app.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style!css" },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html"
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "url-loader?mimetype=image/png"
      }
    ],
    htmlLoader: {
      ignoreCustomFragments: [/\{\{.*?}}/]
    }
  }
}
