/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'out',
    basePath: "/firma-andreas-mucha",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
