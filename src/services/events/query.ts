import { EventParams } from "@/interface/events";
import { getEvents, getEventsDetail } from "./api";

export const eventTimelineOptions = {
  queryKey: ["event", "timeline"],
  queryFn: () => getEvents({ limit: "3", page: "1" }),
};

export const eventOptions = (params?: EventParams) => {
  return {
    queryKey: ["events", params],
    queryFn: () => getEvents(params),
  };
};

export const eventDetailOptions = (id: string) => {
  return {
    queryKey: ["news", "detail", id],
    queryFn: () => getEventsDetail(id),
  };
};

