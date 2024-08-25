/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    compiler: {
        styledComponents: true
    },
    async redirects() {
        return [
            {
                source: '/join-us',
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfM68GVBXd16Z385XmuoXypEsbf-uWJTIkiYmO2TdGhLjOimQ/viewform',
                permanent: false,
            },
        ];
    }
};

module.exports = nextConfig;
