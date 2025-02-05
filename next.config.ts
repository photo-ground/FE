import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3dnxnvyw1hsv8.cloudfront.net', // 허용할 외부 호스트
      },
    ],
  },
};

export default nextConfig;
