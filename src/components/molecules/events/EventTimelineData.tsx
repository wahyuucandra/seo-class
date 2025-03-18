"use client";
import { eventTimelineOptions } from "@/services/events/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import EventTimelineItem from "./EventTimelineItem";

type Props = {};

const EventTimelineData = (props: Props) => {
  const { data } = useSuspenseQuery(eventTimelineOptions);
  return (
    <>
      {data?.data.map((event) => (
        <EventTimelineItem key={event.id} event={event} />
      ))}
    </>
  );
};

export default EventTimelineData;
