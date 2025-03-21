'use client'
import { eventDetailOptions } from "@/services/events/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
};

const EventDetail = ({ id }: Props) => {
  const { data } = useSuspenseQuery(eventDetailOptions(id));

  return (
    <div className="relative py-20">
      <div className="absolute inset-0 overflow-hidden bg-indigo-50">
        <img
          alt="banner-event"
          fetchPriority="high"
          width="918"
          height="1495"
          decoding="async"
          data-nimg="1"
          className="absolute top-0 left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          style={{
            color: "transparent",
          }}
          src="https://keynote.tailwindui.com/_next/static/media/background.6c3571e0.jpg"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-center text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span> {data?.data.title}
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              {data?.data.description}
            </p>
            <div className="py-2">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={data?.data?.imageurl ?? ''}
                alt={`event-${data?.data?.id}`}
                width={560}
                height={315}
              />
            </div>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>
          <a
            className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full"
            href="/events"
          >
            Get your tickets
          </a>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            <div>
              <dt className="font-mono text-sm text-blue-600">Speakers</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                18
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">
                People Attending
              </dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                2,091
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">Venue</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                Staples Center
              </dd>
            </div>
            <div>
              <dt className="font-mono text-sm text-blue-600">Location</dt>
              <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                Los Angeles
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
