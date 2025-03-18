import MainLayout from "@/components/organisms/MainLayout";
import { envClient } from "@/helpers/environments/env";
import News from "@/components/molecules/News";
import { NewsParams } from "@/interface/news";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News - Circle",
  description: "Discover the latest news and updates at Circle.",
  keywords: ["news", "updates", "circle"],
  alternates: {
    canonical: envClient.SITE_URL + "/news",
  },
};

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
