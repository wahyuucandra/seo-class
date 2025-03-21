import { News } from "@/interface/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: News;
};

const NewsCard = ({ data }: Props) => {
  return (
    <Link
      className="group rounded-xl focus:outline-none flex flex-col min-h-72 border shadow-sm"
      href={`/news/${data?.id}`}
    >
      <div>
        <div className="aspect-[16/9]">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={data?.imageurl}
            alt={`news-${data?.id}`}
            width={560}
            height={315}
          />
        </div>
      </div>
      <div className="p-2">
        <p className="mt-2 font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
          {data.title}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          {new Intl.DateTimeFormat("id-ID", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(data.created_at))}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
