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
                destination: 'https://forms.gle/hkc5qRqC1yXv1jgR9',
                permanent: false,
            },
        ];
    }
};

module.exports = nextConfig;
