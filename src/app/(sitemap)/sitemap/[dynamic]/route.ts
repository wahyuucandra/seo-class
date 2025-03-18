import { getServerSideSitemap } from "next-sitemap";
import { redirect } from "next/navigation";
import getNewsSitemap from "../../_action/news";

type RequestParams = {
  params: {
    dynamic: string;
  };
};

export async function GET(req: Request, { params }: RequestParams) {
  const { dynamic } = params;

  const [type, page] = dynamic.replace(".xml", "").split("-");

  const urlList = [
    {
      type: "news",
      getter: (page: string) => getNewsSitemap(page),
    },
  ];

  const url = urlList.find((u) => u.type === type);

  if (!url) {
    redirect("/not-found");
  }

  try {
    const sitemap = await url.getter(page);
    if (sitemap.length === 0) redirect("/not-found");
    return getServerSideSitemap(sitemap);
  } catch (error) {
    redirect("/not-found");
  }
}
