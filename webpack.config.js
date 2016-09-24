
const webpack = require('webpack');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	]
};