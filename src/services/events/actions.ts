"use server";

import { redirect } from "next/navigation";
import satellite from "../satellite";
import { Metadata } from "next";
import { envClient } from "@/utils/environments";

export const filterEvents = async (formData: FormData) => {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const q = formData.get("q") as string;

  const params = new URLSearchParams();
  if (from) {
    params.append("from", from);
  }

  if (to) {
    params.append("to", to);
  }

  if (q) {
    params.append("q", q);
  }

  redirect("/events?" + params.toString());
};

export async function getMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const { data } = await satellite.get(`/event-detail`, {
    params: {
      slug,
    },
  });
  const events = data.data;

  const metadata: Metadata = {
    title: `${events.title}`,
    description: events.description,
    alternates: {
      canonical: envClient.SITE_URL + `/events/${slug}`,
    },
  };

  return metadata;
}
