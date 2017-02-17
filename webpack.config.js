/** 
 * webpack is a module bundler
 * it bundles all the relevant code in your dependencies/libraries, jsx files, and js files into a single file
 * why shouldn't we use the window to load modules?
 * because it pollutes the namespace
 * what if you have two components that are the same name? won't be able to have both components
 * this was a common problem to many web app frameworks
 */
const webpack = require("webpack");
const path = require("path");

const src = path.resolve(__dirname, "src");
const build = path.resolve(__dirname, "build");

const config = {
  entry: src + "/index.js",
  output: {
    path: build,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        /** check for files ending in a js extension */
        test: /\.js$/,
        /** transpile using babel */
        use: "babel-loader",
        /** have already been transpiled when published, no need to transpile again */
        exclude: /node_modules/
      },
      {
        /** check for files ending in a css extension */
        test: /\.css$/,
        /** loaders are read from right to left, these loaders process the css so it shows up in the bundle */
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;