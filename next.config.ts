import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
