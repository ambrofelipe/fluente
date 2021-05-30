const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const jQuery = require("jquery");
module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "demo"),
		compress: true,
		publicPath: "demo",
		writeToDisk: true,
	},
	entry: "./src/js/app.js",
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
				test: /\.(js|jsx)$/,
				exclude: /[\\/]node_modules[\\/]/,
				use: {
					loader: "babel-loader",
				},
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
				test: /\.(svg|jpe?g|gif|mp4)(\?\S*)?$/,
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
			{
				test: /\.(png)(\?\S*)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "../ico/",
							publicPath: "../ico/",
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
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: "../index.html",
			inject: false,
			template: path.resolve(__dirname, "src", "index.html"),
		}),
	],
};
