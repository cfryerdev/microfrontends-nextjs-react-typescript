const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	devServer: {
		port: 3003,
		open: false,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			'@shared': path.resolve(__dirname, '../../shared')
		}
	},
	output: {
		publicPath: `auto`,
        chunkFilename: '[name].[contenthash].js',
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name].[contenthash][ext][query]',
        clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		]
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "remote_profile",
			filename: 'remote.js',
			library: { type: 'var', name: 'remote_profile' },
			exposes: {
				'./Application': './src/_app',
      		},
			shared: {
				'react': {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
				'next': {
					singleton: true,
					requiredVersion: deps['next'],
				},
			},
		}),
		new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main'],
        }),
	],
};
