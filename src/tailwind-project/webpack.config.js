const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: './src/tailwindcss-plugin-for-epi.css',
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader'
					]
				})
			},
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
		]
	},
	plugins: [
		new ExtractTextPlugin('tailwindcss-plugin-for-epi.css', {
			disable: process.env.NODE_ENV === 'development'
		}),
		new WriteFileWebpackPlugin({
			// Write only files that have ".css" extension.
			test: /\.css$/,
			useHashIndex: true
		}),
		
	]
};
