/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/qargo-frontend",
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
};

export default nextConfig;
