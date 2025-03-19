import EventDetail from "@/components/molecules/EventDetail";
import React, { Suspense } from "react";
import ClientMetadata from "@/components/atoms/ClientMetadata";
import { getMetadata } from "@/services/events/actions";
import EventDetailFetcher from "@/components/molecules/events/EventDetailFetcher";

type Props = {
  searchParams: Promise<{
    id: string
  }>
  params: Promise<{
    slug: string
  }>
}

const EventDetailPage = async ({ params }: Props) => {
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
        key={getParams.slug}
        fallback={null}
      >
        <EventDetailFetcher slug={getParams.slug}>
          <EventDetail slug={getParams.slug} />
        </EventDetailFetcher>
      </Suspense>
    </div>
  );
};

export default EventDetailPage;
