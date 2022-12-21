const NextFederationPlugin =
	require("@module-federation/nextjs-mf").NextFederationPlugin;
const FederatedTypesPlugin =
	require("@module-federation/typescript").FederatedTypesPlugin;
const path = require("path");

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
const federatedConfig = {
	name: "host",
	filename: "static/chunks/remote.js",
	remotes: setRemotesVariable(),
};
console.log("#DEBUG_REMOTES#", setRemotesVariable());

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		externalDir: true,
	},
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(new NextFederationPlugin(federatedConfig));
			config.plugins.push(
				new FederatedTypesPlugin({
					federationConfig: { ...federatedConfig },
				})
			);
		}
		return config;
	},
};

module.exports = nextConfig;
