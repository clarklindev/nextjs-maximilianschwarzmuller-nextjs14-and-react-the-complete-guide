/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        pathname: "/**",
      },
      { hostname: "res.cloudinary.com", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
