/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tremor/react', 'recharts', 'd3-scale', 'd3-shape'],
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
      alias: {
        ...config.resolve.alias,
        'd3-scale': require.resolve('d3-scale'),
        'd3-shape': require.resolve('d3-shape'),
        'victory-vendor/d3-scale': require.resolve('d3-scale'),
        'victory-vendor/d3-shape': require.resolve('d3-shape')
      }
    };
    return config;
  },
};

module.exports = nextConfig; 