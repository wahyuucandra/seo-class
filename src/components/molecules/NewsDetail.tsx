"use client";
import { newsDetailOptions } from "@/services/news/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import StructuredData from "../atoms/StructuredData";
import { generateSingleImageSchema } from "@/schema/image";
import { CustomHeading } from "../atoms/CustomHeading";

type Props = {
  slug: string;
};

const NewsDetail = ({ slug }: Props) => {
  const { data } = useSuspenseQuery(newsDetailOptions(slug));
  const tags = data?.data.tags.split(",") || [];
  return (
    <>
      <StructuredData id="news-schema" data={generateSingleImageSchema({
        url: data?.data.imageurl,
        name: data?.data.title,
        author: data?.data.author ?? "-",
        datePublished: new Date(data?.data.publicationdate ?? '').toLocaleDateString()
      })} />
      <section className="relative pt-12 pb-20 bg-indigo-600">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
          <Link
            href="/news"
            className="text-white relative max-w-max flex items-center mb-4 hover:before:bg-white hover:before:w-full hover:before:h-0.5 before:w-0 hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:rounded-full transform hover:before:transition-all duration-500 ease-in-out hover:before:content-['']"
          >
            <ArrowLeft size={24} />
            <span className="ml-4">Back to News</span>
          </Link>
          <CustomHeading heading="h1" className="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">
            {data?.data.title}
          </CustomHeading>
          <div className="flex items-center justify-between">
            <div className="data">
              <p className="font-medium text-xl leading-8 text-white mb-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-white bg-indigo-800 px-2 py-1 rounded-md mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <CustomHeading heading="h3" className="font-normal text-lg leading-7 text-white mt-4">
                Author: {data?.data.author}
              </CustomHeading>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-16 ">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
          <p className="font-normal text-lg leading-8 text-gray-500 mb-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rerum
            repellendus earum dolores nesciunt dignissimos molestias natus?
            Error, unde molestiae. Maiores pariatur a sed accusamus.
          </p>

          <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
            Save up to 40% compared to a merchant cash advance and other online
            lenders.
          </h4>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
