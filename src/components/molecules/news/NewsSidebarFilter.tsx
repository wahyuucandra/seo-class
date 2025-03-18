import { filterNews } from "@/services/news/actions";
import { NewsParams } from "@/interface/news";
import { Search } from "lucide-react";

type Props = {
  searchParams: NewsParams;
};

const NewsFilterSidebar = ({ searchParams }: Props) => {
  // const fromValue = searchParams?.from?.toString();
  // const toValue = searchParams?.to?.toString();
  return (
    <>
      <form
        action={filterNews}
        className="sticky top-8 rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm"
      >
        <h6 className="font-semibold text-base leading-7 text-black mb-5">
          Filter News
        </h6>
        <div className="flex flex-col mb-5 gap-4">
          <div className="relative w-full">
            <label
              htmlFor="from"
              className="block mb-2 text-sm font-semibold text-gray-600 w-full"
            >
              Start Date
            </label>
            <input
              className="text-sm"
              type="date"
              name="from"
              id="from"
              // defaultValue={fromValue}
            />
          </div>
          <div className="relative w-full">
            <label
              htmlFor="to"
              className="block mb-2 text-sm font-semibold text-gray-600 w-full"
            >
              End Date
            </label>
            <input
              className="text-sm"
              type="date"
              name="to"
              id="to"
              // defaultValue={toValue}
            />
          </div>
        </div>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-semibold text-gray-600 w-full"
        >
          Keywords
        </label>
        <div className="relative w-full mb-8">
          <input
            // defaultValue={searchParams?.q}
            type="text"
            id="q"
            name="q"
            placeholder="Search for news"
            className="h-12 border border-gray-300 text-gray-900 text-xs font-semibold rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-lime-500 text-black font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  "
        >
          <Search size={20} />
          Search
        </button>
      </form>
    </>
  );
};

export default NewsFilterSidebar;
