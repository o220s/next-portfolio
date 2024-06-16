export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp", "image/png", "image/jpeg"],
  },
  env: {
    NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  },
};
