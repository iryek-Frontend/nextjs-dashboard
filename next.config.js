/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			allowedForwardedHosts: ['0.0.0.0:3010'],
			allowedOrigins: ['146.56.151.119:3010']
		},
	}
};

module.exports = nextConfig;
