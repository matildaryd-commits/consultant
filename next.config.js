/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for optimal hosting
  output: 'export',

  // Trailing slashes to match current URL structure
  trailingSlash: false,

  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
