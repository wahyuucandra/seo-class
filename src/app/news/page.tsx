import MainLayout from "@/components/organisms/MainLayout";
import News from "@/components/molecules/News";
import { NewsParams } from "@/interface/news";
import React from "react";

type Props = {
  searchParams: NewsParams;
};

const NewsPage = ({ searchParams }: Props) => {
  return (
    <MainLayout>
      <div className="py-4">
        <News searchParams={searchParams} />
      </div>
    </MainLayout>
  );
};

export default NewsPage;
