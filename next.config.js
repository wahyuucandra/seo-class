/** @type {import('next').NextConfig} */
const JavaScriptObfuscator = require("webpack-obfuscator");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.plugins.push(
        new JavaScriptObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
          },
          [
            '_next/*.js',
            //'src/app/**/*.tsx',
            'src/app/**/*.ts'
          ]
        )
      );
    }
    return config;
  },
};

module.exports = nextConfig