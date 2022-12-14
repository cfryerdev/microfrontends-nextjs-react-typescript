const NextFederationPlugin = require('@module-federation/nextjs-mf');

const setRemotesVariable = () => {
  const collection = {};
  for (const [key, value] of Object.entries(process.env)) {
    if (key.toUpperCase().startsWith('REMOTE_')) {
      const remoteName = key.toLocaleLowerCase();
      collection[remoteName] = `${remoteName}@${value}`
    }
  }
  return collection;
};
console.log('#DEBUG_REMOTES#', setRemotesVariable());

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remote.js',
          remotes: setRemotesVariable(),
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
