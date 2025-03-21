import NewsDetailFetcher from "@/components/molecules/news/NewsDetailFetcher";
import NewsDetailSkeleton from "@/components/molecules/news/NewsDetailSkeleton";
import NewsDetail from "@/components/molecules/NewsDetail";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    id: number
  }>
}

const NewsDetailPage = async ({ params }: Props) => {
  const getParams = await params

  return (
    <div>
      <Suspense
        key={getParams.id}
        fallback={<NewsDetailSkeleton />}
      >
        <NewsDetailFetcher id={getParams.id}>
          <NewsDetail id={getParams.id} />
        </NewsDetailFetcher>
      </Suspense>
    </div>
  );
};

export default NewsDetailPage;
