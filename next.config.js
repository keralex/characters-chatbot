module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/characters",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pinimg.com",
            },
            {
                protocol: "https",
                hostname: "staticg.sportskeeda.com",
            },
        ],
    },
};
