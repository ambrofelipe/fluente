const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "demo"),
    compress: true,
    publicPath: "demo",
    writeToDisk: true,
  },
  entry: "./src/js/app.js",
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "demo/js"),
    publicPath: "demo",
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../fonts/",
              publicPath: "../fonts/",
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|jpeg|gif|png)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../img/",
              publicPath: "../img/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/app.css",
    }),
  ],
};
