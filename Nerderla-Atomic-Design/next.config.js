const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: '@import "styles/styles.scss";',
    },
};

module.exports = nextConfig;
