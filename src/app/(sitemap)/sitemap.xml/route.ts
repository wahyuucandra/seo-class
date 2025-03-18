import { envClient } from "@/helpers/environments/env";
import { getServerSideSitemapIndex } from "next-sitemap";

export async function GET() {
  const routes = ["general.xml", "news.xml", "events.xml"];

  const routesWithBase = routes.map(
    (route) => `${envClient.SITE_URL}/sitemap/${route}`
  );
  return getServerSideSitemapIndex(routesWithBase, {
    "Content-Type": "application/xml",
  });
}
