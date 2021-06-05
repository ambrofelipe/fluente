const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const jQuery = require("jquery");

module.exports = {
	entry: "./src/js/app.js",

	module: {
		rules: [
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						},
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
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
			{
				test: /\.(svg|jpg|jpeg|gif|mp4)(\?\S*)?$/,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
			{
				test: /\.(png)(\?\S*)?$/,
				type: "asset/resource",
				generator: {
					filename: "ico/[name][ext]",
				},
			},
		],
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new MiniCssExtractPlugin({
			filename: "css/app.css",
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "docs.html",
			template: path.resolve(__dirname, "src", "docs.html"),
		}),
		new CleanWebpackPlugin(),
	],

	output: {
		filename: "js/app.js",
		path: path.resolve(__dirname, "docs"),
		clean: true,
	},
};
