const path = require("path");
const webpack = require("webpack");
const jQuery = require("jquery");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
	mode: "production",
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		compress: true,
		publicPath: "dist",
		writeToDisk: true,
	},
	entry: "./src/js/app.js",
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist/js"),
		publicPath: "dist",
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
				test: /\.(svg|jpg|jpeg|gif)(\?\S*)?$/,
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: "../index.html",
			inject: false,
			template: path.resolve(__dirname, "src", "index.html"),
		}),
	],
	optimization: {
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
	},
};
