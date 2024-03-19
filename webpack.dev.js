const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "playable dev",
      inlineSource: ".(js|css|png|jpg|svg|mp3|gif|hdr|glb|fbx)$",
    }),
  ],

  output: {
    filename: "[name].js",
  },
});
