import { envClient } from "@/utils/environments";
import { getServerSideSitemapIndex } from "next-sitemap";
import { getEventsData } from "../../_action/events";

export async function GET() {
  try {
    const result = await getEventsData();
    if (!result) return getServerSideSitemapIndex([]);
    // separate result per 3 url
    const routes = Array.from(
      { length: Math.ceil(result.total/3) },
      (_, i) => {
        return `${envClient.SITE_URL}/sitemap/events-${i + 1}.xml`;
      }
    );

    return getServerSideSitemapIndex(routes);
  } catch (error) {
    return getServerSideSitemapIndex([]);
  }
}
