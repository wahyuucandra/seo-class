import { ReturnResponse, SingleResponse } from "@/interface/common";
import satellite from "../satellite";
import { News, NewsParams, NewsParamsDetail } from "@/interface/news";

export const getNews = async (params?: NewsParams) => {
  const res = await satellite.get<ReturnResponse<News[]>>("/news", {
    params
  });

  return res.data;
};

export const getNewsDetail = async (params?: NewsParamsDetail) => {
  try {
    const res = await satellite.get<SingleResponse<News>>(`/news-detail`, {
      params
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
