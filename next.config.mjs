/** @type {import('next').NextConfig} */
const nextConfig = {
  generateStaticParams: () => [],
  generateStaticPaths: () => ({ paths: [], fallback: 'blocking' }),
};

export default nextConfig;
