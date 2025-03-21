import { Skeleton } from "@/components/atoms/skeleton";
import React from "react";

type Props = {};

const NewsDetailSkeleton = (props: Props) => {
  return (
    <div>
      <section className="relative pt-12 pb-20 bg-gray-200">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
          <Skeleton className="h-12 w-full bg-gray-400" />
          <Skeleton className="h-8 w-3/4 bg-gray-400 mt-4" />
          <Skeleton className="h-8 w-1/2 bg-gray-400 mt-4" />
        </div>
      </section>
      <section className="relative py-10 lg:py-16">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-3/4 mt-4" />
          <Skeleton className="h-8 w-1/2 mt-4" />
        </div>
      </section>
    </div>
  );
};

export default NewsDetailSkeleton;
