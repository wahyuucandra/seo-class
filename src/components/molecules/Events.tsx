import EventBanner from "@/components/molecules/events/EventBanner";
import EventContent from "@/components/molecules/events/EventContent";
import EventsFilterSidebar from "@/components/molecules/events/EventSidebarFilter";
import EventTabs from "@/components/molecules/events/EventTabs";
import { EventParams } from "@/interface/events";
import { Suspense } from "react";
import EventsPageFetcher from "./events/EventPageFetcher";
import NewsCardSkeleton from "./news/NewsCardSkeleton";

type Props = {
  searchParams: EventParams;
};

const Events = ({ searchParams }: Props) => {

  const defaultSearchParams: EventParams = {
    limit: "6",
    page: "1"
  };

  const params = { ...defaultSearchParams, ...searchParams };

  return (
    <>
      <EventBanner />
      <div className="grid grid-cols-12 gap-4 py-4">
        <div className="col-span-5 md:col-span-3">
          <EventsFilterSidebar searchParams={params} />
        </div>
        <div className="col-span-7 md:col-span-9">
          <div className="flex flex-col gap-2">
            <div className="max-w-max place-self-end">
              <EventTabs />
            </div>
            <Suspense
                key={JSON.stringify(params)}
                fallback={<NewsCardSkeleton length={6} />}
              >
                <EventsPageFetcher params={params}>
                  <EventContent params={params} />
                </EventsPageFetcher>
              </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
