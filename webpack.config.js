const	path	=	require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports	=	{
		entry:	"./src/js/index.js",
		output:	{	path:	path.resolve("dist"),		filename:	"out.js"	},
    watch: true,
    devtool: 'eval-source-map',
		plugins: [
			new ExtractTextPlugin('css/style.css')
		],
    devServer: {
        inline:true,
        contentBase: "./",
        port: 3000
        },
				module: {
	       rules: [
	         {
	           test: /\.(js|jsx)$/,
	           exclude: /node_modules/,
	           use: {
	             loader: 'babel-loader',
	             options: {
	               presets: ['babel-preset-env', 'stage-2', 'react']
	             }
	           }
	         },
	         {
	           test: /\.css$/,
	           use: ExtractTextPlugin.extract({
	             fallback: "style-loader",
	             use: "css-loader"
	           })
	         }
	       ]
	     }
	   };
