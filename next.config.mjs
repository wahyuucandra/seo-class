/** @type {import('next').NextConfig} */
import JavaScriptObfuscator from 'javascript-obfuscator';

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
      config.optimization.minimize = true;

      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.emit.tapAsync('JavaScriptObfuscatorPlugin', (compilation, callback) => {
            const obfuscationOptions = {
              rotateStringArray: true,
              stringArray: true,
              stringArrayThreshold: 0.75,
              controlFlowFlattening: true,
              deadCodeInjection: true,
              debugProtection: true,
              selfDefending: true,
              disableConsoleOutput: true,
            };

            for (const assetName in compilation.assets) {
              if (assetName.endsWith('.ts') || assetName.endsWith('.tsx')) {
                const asset = compilation.assets[assetName];
                const originalCode = asset.source();
                const obfuscatedCode = JavaScriptObfuscator.obfuscate(originalCode, obfuscationOptions).getObfuscatedCode();
                compilation.assets[assetName] = {
                  source: () => obfuscatedCode,
                  size: () => obfuscatedCode.length,
                };
              }
            }
            callback();
          });
        },
      });
    }
    return config;
  }
};

export default nextConfig;