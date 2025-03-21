"use client";
import { newsSectionOptions } from "@/services/news/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import NewsCard from "./NewsCard";

type Props = {};

const NewsData = (props: Props) => {
  const { data } = useSuspenseQuery(newsSectionOptions);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data?.data?.map((news, index) => (
        <NewsCard key={index} data={news} />
      ))}
    </div>
  );
};

export default NewsData;
