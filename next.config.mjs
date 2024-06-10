/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `${process.env.BASE_PATH || "/portfolio"}`,
  reactStrictMode: true,
};

export default nextConfig;
