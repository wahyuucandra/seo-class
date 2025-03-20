import Link from "next/link";
import React from "react";
import { Event } from "@/interface/events";
import { CustomHeading } from "@/components/atoms/CustomHeading";

type Props = {
  data: Event;
};

const EventCard = ({ data }: Props) => {

  return (
    <Link
      href={`/events/${data?.slug}`}
      className="border border-gray-200 rounded-lg max-w-72"
    >
      <img
        src={data.imageurl}
        alt={`event-${data?.slug}`}
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="p-4">
        <div className="flex items-center mb-1">
          <p className="text-xs text-gray-600">
            {new Date(data.date).toLocaleDateString("id-ID", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            at {data.time.split(":").slice(0, 2).join(":")}
          </p>
        </div>
        <CustomHeading heading="h1" className="font-semibold text-sm text-gray-800">
          {data.title}
        </CustomHeading>
        <p className="mt-1 text-sm text-gray-600">
          {data.description}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
