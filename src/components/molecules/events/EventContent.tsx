"use client";
import React from "react";
import { EventParams } from "@/interface/events";
import { useSuspenseQuery } from "@tanstack/react-query";
import { eventOptions } from "@/services/events/query";
import EventCard from "./EventCard";

type Props = {
  params: EventParams;
};

const EventContent = ({ params }: Props) => {
  const { data } = useSuspenseQuery(eventOptions(params));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.data?.map((event) => (
          <EventCard key={event.id} data={event}/>
        ))}
      </div>
    </>
  );
};

export default EventContent;
