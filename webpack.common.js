const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
							publicPath: "../",
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
				test: /\.(js|jsx?)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(json)(\?\S*)?$/,
				exclude: /node_modules/,
				type: "asset/resource",
				generator: {
					filename: "js/[name][ext]",
				},
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
		new MiniCssExtractPlugin({
			filename: "css/app.css",
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "contratar/index.html",
			template: path.resolve(__dirname, "src", "contratar/index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "docs/index.html",
			template: path.resolve(__dirname, "src", "docs/index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "portfolio/index.html",
			template: path.resolve(__dirname, "src", "portfolio/index.html"),
		}),
		new CleanWebpackPlugin(),
	],

	output: {
		filename: "js/[name].[fullhash:8].js",
		chunkFilename: "js/[id].[fullhash:8].js",
		sourceMapFilename: "js/[name].[fullhash:8].map",
		path: path.resolve(__dirname, "docs"),
		clean: true,
	},
};
