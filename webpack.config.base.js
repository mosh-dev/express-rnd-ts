const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {NODE_ENV = 'production'} = process.env;

module.exports = {
  entry: [
    './src/app.ts'
  ],
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/
      }
    ]
  },
  externals: [
    nodeExternals()
  ]
};
