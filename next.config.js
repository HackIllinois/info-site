/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: { appDir: true },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            type: 'asset'
        });

        return config;
    }
};

module.exports = nextConfig;
