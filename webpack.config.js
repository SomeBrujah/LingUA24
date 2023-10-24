const path = require('path');
const HTMLWebpackplugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", {
					loader: "css-loader",
					options: {
						modules: {
							auto: (resPath) => resPath.includes(".module."),
							localIdentName: "[hash:base64:8]",
						}
					},
				}, "sass-loader"]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-typescript"
						]
					}
				},
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HTMLWebpackplugin({
			title: "Lingua24",
			template: "./src/index.html"
		}),
		new CleanWebpackPlugin({})
	]
};