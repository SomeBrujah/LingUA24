const path = require('path');
const HTMLWebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.png$/,
				loader: 'file-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", {
					loader: "css-loader",
					options: {
						modules: {
							auto: (resPath) => resPath.includes(".module."),
							localIdentName: "[hash:base64:8]",
						}
					},
				}, "sass-loader"]
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			assets: path.resolve(__dirname, 'src/assets'),
			helpers: path.resolve(__dirname, 'src/helpers'),
		}
	},
	plugins: [
		new HTMLWebpackplugin({
			title: "Lingua24",
			template: "./src/index.html"
		}),
		new CleanWebpackPlugin({})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
};