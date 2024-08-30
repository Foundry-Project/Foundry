const path = require('path');

module.exports = {
  target: 'node', 
  entry: './index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  mode: 'development', // Set the mode to development
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
    ],
  },
  resolve: {
    fallback: {
      "path": require.resolve('path-browserify'),
    },
  },
  devtool: 'source-map',
  resolve: {
    fallback: {
      "fs": require.resolve("browserify-fs"),
      "url": require.resolve("url/"),
      "path": require.resolve("path-browserify"),
      "assert": require.resolve("assert/"),
      "crypto": require.resolve('crypto-browserify'),
      "process": require.resolve("process/browser")


    } // Enable source maps for easier debugging
}};
