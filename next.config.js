/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  optimizeFonts: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true, // Use cautiously
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true, // Use cautiously
  },
  images: {
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    // Keep Webpack modifications minimal for static export
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': __dirname,
      },
    };

    return config;
  },
};

module.exports = nextConfig;
