const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		demo: path.resolve(__dirname, './demo/init')
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'static/[name].js'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			filename: 'index.html',
			template: './demo/index.html'
		})
	],
	devServer: {
		contentBase: './build'
	}
};
