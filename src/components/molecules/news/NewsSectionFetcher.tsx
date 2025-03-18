import { getQueryClient } from "@/helpers/utils/get-query-client";
import { newsSectionOptions } from "@/services/news/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NewsSectionFetcher = async ({ children }: Props) => {
  let queryClient;
  try {
    queryClient = getQueryClient();
    await queryClient.fetchQuery(newsSectionOptions);
  } catch (error) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p className="text-red-500">Failed to fetch news data.</p>
      </div>
    );
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default NewsSectionFetcher;
