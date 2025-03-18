import { Skeleton } from "@/components/atoms/skeleton";
import React from "react";

type Props = {
  length?: number;
};

const EventTimelineSkeleton = ({ length = 3 }: Props) => {
  return (
    <>
      {new Array(length).fill(0).map((_, index) => (
        <div className="group relative flex gap-x-5 max-w-2xl" key={index}>
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
          <div className="grow pb-8 group-last:pb-0">
            <div className="flex items-center mb-1">
              <Skeleton className="w-20 h-4 mt-2" />
            </div>
            <Skeleton className="w-40 h-6 mt-2" />
            <Skeleton className="w-96 h-4 mt-2" />
            <Skeleton className="w-80 h-4 mt-2" />
            <div className="flex gap-2 items-center mt-2">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-20 h-4" />
            </div>
            <Skeleton className="w-24 h-8 mt-2" />
          </div>
        </div>
      ))}
    </>
  );
};

export default EventTimelineSkeleton;
