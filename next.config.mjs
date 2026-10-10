/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/firma-andreas-mucha",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
