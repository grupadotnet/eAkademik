import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@/components': path.resolve(__dirname, "src/components/"),
      '@/features': path.resolve(__dirname, "src/features/"),
      '@/constants': path.resolve(__dirname, "src/constants/"),
      '@/styles': path.resolve(__dirname, "src/styles/")
    },
  },
}