import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const EventBanner = (props: Props) => {
  return (
    <div className="w-full">
      <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
        <p className="me-2 inline-block text-white">
          Get the latest updates on our events
        </p>
        <Link
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 focus:outline-none focus:border-white/70 focus:text-white/70 disabled:opacity-50 disabled:pointer-events-none"
          href="/learn-more"
        >
          Learn more
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default EventBanner;
