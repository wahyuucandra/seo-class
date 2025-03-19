import MainLayout from "@/components/organisms/MainLayout";
import Events from "@/components/molecules/Events";
import { EventParams } from "@/interface/events";
import React from "react";
import { Metadata } from "next";
import { envClient } from "@/utils/environments";

export const metadata: Metadata = {
  title: "Event - Circle",
  description: "Discover the latest event and updates at Circle.",
  keywords: ["news", "updates", "circle"],
  alternates: {
    canonical: envClient.SITE_URL + "/events",
  },
};

type Props = {
  searchParams: EventParams;
};

const EventsPage = ({ searchParams }: Props) => {
  return (
    <MainLayout>
      <Events searchParams={searchParams} />
    </MainLayout>
  );
};

export default EventsPage;
