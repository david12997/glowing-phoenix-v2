/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:'cms.glowingphoenix.co',
                pathname:'/glowing-banda/assets/**'
            }
        ]
    }
}

module.exports = nextConfig