import { Skeleton } from "@/components/atoms/skeleton";
import React from "react";

type Props = {};

const EventSkeleton = (props: Props) => {
  return (
    <div className="border border-gray-200 rounded-lg max-w-72">
      <Skeleton className="w-full h-40 object-cover rounded-lg" />

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center mb-1">
          <Skeleton className="w-16 h-4"></Skeleton>
        </div>
        <Skeleton className="w-40 h-4"></Skeleton>
        <Skeleton className="w-32 h-4"></Skeleton>
        <Skeleton className="w-24 h-4"></Skeleton>
      </div>
    </div>
  );
};

export default EventSkeleton;
