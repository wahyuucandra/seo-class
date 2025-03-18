import { Suspense } from "react";
import EventTimelineData from "./EventTimelineData";
import EventTimelineFetcher from "./EventTimelineFetcher";
import EventTimelineSkeleton from "./EventTimelineSkeleton";
import Image from "next/image";

type Props = {};

const UpcomingEventTimeline = (props: Props) => {
  return (
    <div className="py-10 container">
      <div className="flex flex-col gap-y-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
        <p className="text-gray-600">
          Here are some of the upcoming events that you can attend.
        </p>
      </div>
      <Suspense fallback={<EventTimelineSkeleton length={3} />}>
        <EventTimelineFetcher>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <EventTimelineData />
            </div>
            <div className="col-span-4">
              <Image
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                alt="Features Image"
                width={920}
                height={920}
              />
            </div>
          </div>
        </EventTimelineFetcher>
      </Suspense>
    </div>
  );
};

export default UpcomingEventTimeline;
