import { getEvents } from "@/services/events/api";
import { envClient } from "@/utils/environments";
import { escapeHtml } from "@/utils/helpers/utils";
import { Event } from "@/interface/events";

import { ISitemapField } from "next-sitemap";

export const getEventsData = async (page = "1", limit = "3") => {
  try {
    const result = await getEvents({ page, limit });

    if (result.data) {
      const data = result.data;
      const total = result.pagination.total;
      return { data, total };
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default async function getEventsSitemap(
  page: string
): Promise<ISitemapField[]> {
  const result = await getEventsData(page);
  const data = result?.data;

  console.log(data)

  const sitemapLinks = data?.map((res: Event) => {
    const postedDate = new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(res.created_at));

    const loc = `${envClient.SITE_URL}/event/${res.slug}`;

    return {
      loc: escapeHtml(loc),
      lastmod: postedDate,
    };
  });

  return sitemapLinks as ISitemapField[];
}
