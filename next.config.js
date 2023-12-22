/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: "pillowtalkderm.com",
         },
         {
            hostname: "img.clerk.com",
         },
      ],
   },
}

module.exports = nextConfig
