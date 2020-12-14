let path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}