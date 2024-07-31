/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API: process.env.API,
        DOMAIN_API: process.env.DOMAIN_API,
    },
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
