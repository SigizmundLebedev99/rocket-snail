let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "./src/index.ts"),
    mode: "development",
    output: {
      path: path.join(__dirname, '/dist'),
      filename:  "bundle.js"
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    devtool:"source-map",
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader" 
          ]
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
          inject:'body'
      })
    ],
    devServer:{
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
}