export default {
  reactStrictMode: true,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  },
};
