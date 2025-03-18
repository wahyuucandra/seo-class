import { ReturnResponse, SingleResponse } from "@/interface/common";
import satellite from "../satellite";
import { Event, EventParams } from "@/interface/events";

export const getEvents = async (params?: EventParams) => {
  const res = await satellite.get<ReturnResponse<Event[]>>("/events", {
    params,
  });

  return res.data;
};

export const getEventsDetail = async (slug: string) => {
  try {
    const res = await satellite.get<SingleResponse<Event>>(`/event-detail`, {
      params: {
        slug,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
