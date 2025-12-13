/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://rfgdwuzsvhsecn9q.public.blob.vercel-storage.com/**')],
    },

};

export default nextConfig;
