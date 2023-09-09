const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: [
        {directory: path.join(__dirname, 'dist')},
        {directory: path.join(__dirname, 'static')} 
    ],
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'static',
        },
      },
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

