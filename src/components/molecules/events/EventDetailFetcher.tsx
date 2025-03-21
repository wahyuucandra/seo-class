import { getQueryClient } from "@/utils/helpers/get-query-client";
import { eventDetailOptions } from "@/services/events/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

type Props = {
  id: number;
  children: React.ReactNode;
};

const EventDetailFetcher = async ({ children, id }: Props) => {
  let queryClient;
  try {
    queryClient = getQueryClient();
    await queryClient.fetchQuery(eventDetailOptions(id));
  } catch (error) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p className="text-red-500">Failed to fetch news detail data.</p>
      </div>
    );
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default EventDetailFetcher;
