/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export hosted directly from Netlify's out directory.
  output: "export",

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;