/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'logo.clearbit.com',
                pathname: '/**',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
