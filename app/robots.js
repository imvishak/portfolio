export default function robots() {
  return {
    rules: {
      index: true,
      follow: true,
      nocache: true,
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${process.env.PUBLIC_DOMAIN_URL}/sitemap.xml`,
  };
}
