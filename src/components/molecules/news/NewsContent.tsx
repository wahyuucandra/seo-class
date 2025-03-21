"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard";
import { newsOptions } from "@/services/news/query";
import { NewsParams } from "@/interface/news";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  params: NewsParams;
};

const NewsContent = ({ params }: Props) => {
  const { data } = useSuspenseQuery(newsOptions(params));

  const generateNextPageHref = () => {
    const maxPage = Math.ceil(data.pagination.total / data.pagination.perPage)
    const nextPage = parseInt(params?.page || "0") >= maxPage ? maxPage : parseInt(params?.page || "0") + 1;
    const newParams = { ...params, page: nextPage.toString() };

    return "/news?" + new URLSearchParams(newParams).toString();
  };

  const generatePreviousPageHref = () => {
    const minPage = 1
    const previousPage = parseInt(params?.page || "0") <= minPage ? minPage : parseInt(params?.page || "0") - 1;
    const newParams = { ...params, page: previousPage.toString() };

    return "/news?" + new URLSearchParams(newParams).toString();
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data?.map((news) => (
          <NewsCard key={news.id} data={news} />
        ))}
      </div>
      <nav className="flex items-center gap-x-1 justify-center mt-6">
        <Link
          href={generatePreviousPageHref()}
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <ChevronLeft className="size-3.5" />
          <span className="sr-only">Previous</span>
        </Link>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            {data.pagination.page}
          </span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            of
          </span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
            {Math.ceil(data.pagination.total / data.pagination.perPage)}
          </span>
        </div>
        <Link
          href={generateNextPageHref()}
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <ChevronRight />
        </Link>
      </nav>
    </>
  );
};

export default NewsContent;
