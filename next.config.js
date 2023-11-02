/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'pillowtalkderm.com',
         },
      ],
   },
};

module.exports = nextConfig;
