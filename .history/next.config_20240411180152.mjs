/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist'
    basePath: "/firma-andreas-mucha",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
