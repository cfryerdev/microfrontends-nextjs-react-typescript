const path = require('path');
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const setRemotesVariable = () => {
	const collection = {};
	for (const [key, value] of Object.entries(process.env)) {
		if (key.toUpperCase().startsWith("REMOTE_")) {
			const remoteName = key.toLocaleLowerCase();
			collection[remoteName] = `${remoteName}@${value}`;
		}
	}
	return collection;
};
console.log("#DEBUG_REMOTES#", setRemotesVariable());

const federationConfig = {
	name: "host",
	filename: "static/chunks/remote.js",
	remotes: setRemotesVariable(),
};

const { remote_profile, ...rest } = federationConfig.remotes;

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		externalDir: true
	},
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(new NextFederationPlugin(federationConfig));
		}
		
		config.resolve.alias = {
			...config.resolve.alias,
			'@shared': path.resolve(__dirname, '../shared')
		}

		config.plugins.push(
			new FederatedTypesPlugin({
				federationConfig: {
					...federationConfig,
					remotes: []
				},
			})
		);

		return config;
	},
};

module.exports = nextConfig;
