import NewsCardSkeleton from "@/components/molecules/news/NewsCardSkeleton";
import NewsContent from "@/components/molecules/news/NewsContent";
import NewsPageFetcher from "@/components/molecules/news/NewsPageFetcher";
import NewsFilterSidebar from "@/components/molecules/news/NewsSidebarFilter";
import { NewsParams } from "@/interface/news";
import { Suspense } from "react";

type Props = {
  searchParams: NewsParams;
};

const News = ({ searchParams }: Props) => {
  const defaultSearchParams: NewsParams = {
    limit: "6",
    page: "1",
  };

  const params = { ...defaultSearchParams, ...searchParams };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-5 md:col-span-3">
        <NewsFilterSidebar searchParams={params} />
      </div>
      <div className="col-span-7 md:col-span-9">
        <Suspense
          key={JSON.stringify(params)} // re-render when params change
          fallback={<NewsCardSkeleton length={6} />}
        >
          <NewsPageFetcher params={params}>
            <NewsContent params={params} />
          </NewsPageFetcher>
        </Suspense>
      </div>
    </div>
  );
};

export default News;
