var path = require("path");

module.exports = {
  // mode: "production",
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: path.resolve("build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: {
    "react": "react",
    "react-dom": "ReactDOM"

  },
  watch: true
};