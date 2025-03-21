import { ReturnResponse, SingleResponse } from "@/interface/common";
import satellite from "../satellite";
import { Event, EventParams, EventParamsDetail } from "@/interface/events";

export const getEvents = async (params?: EventParams) => {
  const res = await satellite.get<ReturnResponse<Event[]>>("/events", {
    params,
  });

  return res.data;
};

export const getEventsDetail = async (params: EventParamsDetail) => {
  try {
    const res = await satellite.get<SingleResponse<Event>>(`/event-detail`, {
      params,
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
