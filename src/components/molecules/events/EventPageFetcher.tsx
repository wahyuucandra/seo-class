import { getQueryClient } from "@/utils/helpers/get-query-client";
import { EventParams } from "@/interface/events";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";
import { eventOptions } from "@/services/events/query";


type Props = {
  children: React.ReactNode;
  params: EventParams;
};

const EventsPageFetcher = async ({ children, params }: Props) => {
  let queryClient;
  try {
    queryClient = getQueryClient();
    await queryClient.fetchQuery(eventOptions(params));
  } catch (error) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p className="text-red-500">Failed to fetch event data.</p>
      </div>
    );
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default EventsPageFetcher;
