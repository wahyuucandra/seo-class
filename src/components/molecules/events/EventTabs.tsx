"use client";

import { cn } from "@/utils/helpers/utils";
import { useState } from "react";

type Props = {};

const EventTabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-gray-200">
      <nav
        className="flex gap-x-1"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <TabItem
          title="Upcoming"
          count={10}
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        />

        <TabItem
          title="Past"
          count={5}
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
      </nav>
    </div>
  );
};

export default EventTabs;

const TabItem = ({
  title,
  count,
  active,
  onClick,
}: {
  title: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) => {
  const btnClassName = cn(
    "py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active",
    active && "font-semibold border-blue-600 text-blue-600"
  );
  return (
    <button
      type="button"
      className={btnClassName}
      id={`tabs-with-badges-item-${title}`}
      aria-selected={active}
      data-hs-tab={`#tabs-with-badges-${title}`}
      aria-controls={`tabs-with-badges-${title}`}
      role="tab"
      onClick={onClick}
    >
      {title}{" "}
      <span className="hs-tab-active:bg-blue-100 hs-tab-active:text-blue-600 ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        {count}
      </span>
    </button>
  );
};
