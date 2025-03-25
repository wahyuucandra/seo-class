/** @type {import('next').NextConfig} */
import JavaScriptObfuscator from 'webpack-obfuscator';

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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new JavaScriptObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            controlFlowFlattening: true,
            deadCodeInjection: true,
            debugProtection: true,
            selfDefending: true,
            disableConsoleOutput: true,
          },
          ['**/*.tsx', '**/*.ts', '**/*.mts', '**/*.jsx']
        )
      );
    }
    return config;
  }
};

export default nextConfig;