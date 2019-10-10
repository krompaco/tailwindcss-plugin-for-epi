const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './src/tailwindcss-plugin-for-epi.css',
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					'postcss-loader',
				],
			  },
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'tailwindcss-plugin-for-epi.css',
			chunkFilename: 'tailwindcss-plugin-for-epi.css',
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
			  preset: ['default', { discardComments: { removeAll: true } }],
			},
			canPrint: true
		}),
		new WriteFileWebpackPlugin({
			// Write only files that have ".css" extension.
			test: /\.css$/,
			useHashIndex: true
		}),
	]
};
