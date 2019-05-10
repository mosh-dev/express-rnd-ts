const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/app.ts'
  ],
  target: "node",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1
        }
      }
    }
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
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
