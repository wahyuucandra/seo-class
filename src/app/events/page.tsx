import MainLayout from "@/components/organisms/MainLayout";
import Events from "@/components/molecules/Events";
import { EventParams } from "@/interface/events";
import React from "react";

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
