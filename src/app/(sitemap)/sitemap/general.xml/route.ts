import { envClient } from "@/helpers/environments/env";
import { getServerSideSitemap } from "next-sitemap";
export async function GET() {
  const fields = ["", "/about-us", "/news", "/events"];

  const sitemap = fields.map((field) => ({
    loc: envClient.SITE_URL + field,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(sitemap, {
    "Content-Type": "application/xml",
  });
}
