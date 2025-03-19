import { envClient } from "@/utils/environments";
import { MetadataRoute } from "next";

const routes = ["general.xml", "news.xml", "events.xml"];

const routesWithBase = routes.map(
  (route) => `${envClient.SITE_URL}/sitemap/${route}`
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/not-found"],
    },
    sitemap: [`${envClient.SITE_URL}/sitemap.xml`, ...routesWithBase],
  };
}
