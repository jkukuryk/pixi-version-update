const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  stats: "errors-only",
  module: getLoaders(),
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json",
      ".png",
      ".glb",
      ".jpg",
      ".mp3",
      ".svg",
      ".css",
      ".gif",
      ".mp4",
      ".hdr",
    ],
    alias: {
      helper: path.resolve(__dirname, "./helper"),
      assets: path.resolve(__dirname, "./assets"),
      sounds: path.resolve(__dirname, "./sounds"),
      core: path.resolve(__dirname, "./core"),
      ui: path.resolve(__dirname, "./ui"),
      analytics: path.resolve(__dirname, "./analytics"),
      components: path.resolve(__dirname, "./core-components"),
      src: path.resolve(__dirname, "./playable/src"),
      types: path.resolve(__dirname, "./types"),
      root: path.resolve(__dirname, "."),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.ProvidePlugin({ "window.decomp": "poly-decomp" }),
  ],
  stats: {
    children: true,
  },
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
  const esbuild = {
    test: /\.tsx?$/,
    loader: "esbuild-loader",
    options: {
      loader: "tsx",
      target: "es2015",
    },
    exclude: /node_modules/,
  };
  const fileLoader = [
    {
      test: /\.(png|jpg|svg|glb|mp3|gif|mp4|hdr)$/,
      loader: "url-loader",
    },
  ];
  //remove css
  const cssLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  };

  const loaders = {
    rules: [...fileLoader, cssLoader, esbuild],
  };

  return loaders;
}
