import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    devIndicators: false,
    experimental: {
        authInterrupts: true,
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;