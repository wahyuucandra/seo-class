import EventDetail from "@/components/molecules/EventDetail";
import React, { Suspense } from "react";
import EventDetailFetcher from "@/components/molecules/events/EventDetailFetcher";

type Props = {
  params: Promise<{
    id: string
  }>
}

const EventDetailPage = async ({ params }: Props) => {
  const getParams = await params

  return (
    <div>
      <Suspense
        key={getParams.id}
        fallback={null}
      >
        <EventDetailFetcher id={getParams.id}>
          <EventDetail id={getParams.id} />
        </EventDetailFetcher>
      </Suspense>
    </div>
  );
};

export default EventDetailPage;
