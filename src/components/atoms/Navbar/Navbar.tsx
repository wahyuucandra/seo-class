import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavbarListItem from "./NavbarListItem";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 container">
      <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center mx-auto">
        <div className="md:col-span-3">
          <Link
            className="flex-none rounded-xl block font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Circle"
          >
            <Image src="/logo.svg" alt="Circle" width={100} height={72} />
          </Link>
        </div>

        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          >
            Sign in
          </button>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          >
            Hire us
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-hcail"
            >
              <Menu />
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <NavbarListItem href="/" name="Home" />
            <NavbarListItem href="/news" name="News" rel="nofollow"/>
            <NavbarListItem href="/events" name="Events" rel="nofollow" />
            <NavbarListItem href="/about-us" name="About Us" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
