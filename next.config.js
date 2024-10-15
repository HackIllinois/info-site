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
                destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfn255j3kYEvukU-86WBVPbVGQliNruVzNZE1-x2tLzOythyw/viewform',
                permanent: false,
            },
        ];
    }
};

module.exports = nextConfig;
