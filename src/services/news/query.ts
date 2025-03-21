import { NewsParams } from "@/interface/news";
import { useQuery } from "@tanstack/react-query";
import { getNews, getNewsDetail } from "./api";

export const newsSectionOptions = {
  queryKey: ["news", "section"],
  queryFn: () => getNews({ limit: "4", page: "1" }),
};

export const newsOptions = (params?: NewsParams) => {
  return {
    queryKey: ["news", params],
    queryFn: () => getNews(params),
  };
};

export const newsDetailOptions = (id: number) => {
  return {
    queryKey: ["news", "detail", id],
    queryFn: () => getNewsDetail({ id }),
  };
};
