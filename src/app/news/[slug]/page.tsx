import NewsDetailFetcher from "@/components/molecules/news/NewsDetailFetcher";
import NewsDetailSkeleton from "@/components/molecules/news/NewsDetailSkeleton";
import ClientMetadata from "@/components/atoms/ClientMetadata";
import NewsDetail from "@/components/molecules/NewsDetail";
import { getMetadata } from "@/services/news/actions";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    id: string
  }>
  params: Promise<{
    slug: string
  }>
}

const NewsDetailPage = async ({ params }: Props) => {
  const getParams = await params

  return (
    <div>
      <ClientMetadata
        func={async () => {
          "use server";
          return getMetadata({ params: getParams });
        }}
      /> 
      <Suspense
        key={getParams.slug} // re-render when id change
        fallback={<NewsDetailSkeleton />}
      >
        <NewsDetailFetcher slug={getParams.slug}>
          <NewsDetail slug={getParams.slug} />
        </NewsDetailFetcher>
      </Suspense>
    </div>
  );
};

export default NewsDetailPage;
