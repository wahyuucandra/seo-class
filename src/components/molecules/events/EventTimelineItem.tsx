import { Button } from "@/components/atoms/button";
import { Event } from "@/interface/events";
import { Calendar, MapPin, User } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  event: Event;
};

const EventTimelineItem = ({ event }: Props) => {
  const router = useRouter();

  return (
    <div className="group relative flex gap-x-5 max-w-2xl">
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
        <div className="relative z-10 size-6 flex justify-center items-center">
          <Calendar size={32} />
        </div>
      </div>

      <div className="grow pb-8 group-last:pb-0">
        <div className="flex items-center mb-1">
          <p className="text-xs text-gray-600">
            {new Date(event?.date).toLocaleDateString("id-ID", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            at {event?.time.split(":").slice(0, 2).join(":")}
          </p>
        </div>

        <h3 className="font-semibold text-sm text-gray-800">{event?.title}</h3>

        <p className="mt-1 text-sm text-gray-600">{event?.description}</p>
        <div className="flex mt-2 items-center">
          <MapPin size={16} className="text-gray-700" />
          <p className="text-xs text-gray-700 ml-1">{event?.location}</p>
        </div>
        <Button onClick={() => router.push(`/events/${event?.slug}`)} className="mt-4 text-xs" variant="secondary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default EventTimelineItem;
