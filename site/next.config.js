/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Eons Infrastructure Technologies',
    description: 'The official source for all Eons workspace images.',
    icon: '/img/logo.svg',
    listUrl: 'https://registry.workspace.infrastructure.tech/',
    contactUrl: 'https://eons.llc/contact',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm.registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
