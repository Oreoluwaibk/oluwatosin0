/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design', 
    "rc-util", 
    "rc-pagination",
    "rc-picker"
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dg.imgix.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.abcnewsfe.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pressgazette.co.uk',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagez.tmz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "static.stereogum.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "media.thegospelcoalition.org",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "i.insider.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "c.biztoc.com",
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
