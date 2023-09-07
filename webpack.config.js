const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000
  },
  entry: [
        "./src/App.js", 
        "./src/index.js", 
        // "./src/components/Cards.js",
        "./src/components/CreateNote.jsx"
    ],
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ], 
  },  
  plugins: [
    new webpack.ProvidePlugin({React: "react"}),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
}

