/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/firma-andreas-mucha',
    output: "export",
    distDir: 'out',
    images: {
        unoptimized: true
    }
};

export default nextConfig;