/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "via.assets.so",
      },
      {
        hostname: "img-c.udemycdn.com",
      },
      {
        hostname: "zdblogs.zohowebstatic.com",
      },
      {
        hostname: "www.theedigital.com",
      },
      {
        hostname: "www.redmiindia.com",
      },
      {
        hostname: "web-cms.biznetgio.com",
      },
      {
        hostname: "web-cms.biznetgio.com",
      }
    ],
  },
};

export default nextConfig;
