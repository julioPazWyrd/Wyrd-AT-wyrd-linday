import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Outras configurações...
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  ...nextConfig,
});
