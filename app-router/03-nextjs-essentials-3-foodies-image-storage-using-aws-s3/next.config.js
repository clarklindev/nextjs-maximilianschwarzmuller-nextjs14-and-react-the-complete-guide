/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "clarklindev-nextjs-react-the-complete-guide-03-3-foodies.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/foodies",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
