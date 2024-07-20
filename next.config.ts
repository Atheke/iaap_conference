module.exports = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 1000, // 128KB by default
  },
  // Force Next.js to use Static Generation without caching
  generateStaticParams: () => [],
  generateStaticPaths: () => ({ paths: [], fallback: 'blocking' }),
};
