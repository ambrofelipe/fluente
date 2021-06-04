const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const jQuery = require("jquery");

module.exports = {
	entry: "./src/js/app.js",

	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist/js"),
		publicPath: "dist",
		clean: true,
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
				test: /\.(svg|jpg|jpeg|gif|mp4)(\?\S*)?$/,
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
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new MiniCssExtractPlugin({
			filename: "../css/app.css",
		}),
		new HtmlWebpackPlugin({
			filename: "../index.html",
			inject: false,
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "../docs.html",
			inject: false,
			template: path.resolve(__dirname, "src", "docs.html"),
		}),
	],
};
