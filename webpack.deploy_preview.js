const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");

module.exports = merge(common, {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./test.html",
      title: "test",
      inlineSource: ".(js|css|png|jpg|svg|mp3|gif|hdr|glb|fbx)$",
    }),
    new HtmlInlineScriptPlugin(),
  ],
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
});
