import { envClient } from "@/helpers/environments/env";
import { getServerSideSitemapIndex } from "next-sitemap";
import { getNewsData } from "../../_action/news";

export async function GET() {
  try {
    const result = await getNewsData();
    if (!result) return getServerSideSitemapIndex([]);
    // separate result per 10 url
    const routes = Array.from(
      { length: Math.ceil(result.total / 10) },
      (_, i) => {
        return `${envClient.SITE_URL}/sitemap/news-${i + 1}.xml`;
      }
    );

    return getServerSideSitemapIndex(routes);
  } catch (error) {
    return getServerSideSitemapIndex([]);
  }
}
