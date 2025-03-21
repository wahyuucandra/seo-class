"use client";
import { cn } from "@/utils/helpers/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  name: string;
  className?: string;
  rel?:string
};

const NavbarListItem = ({ href, name, className = "",  rel}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div>
      <Link
        className={cn(
          "relative inline-block text-black focus:outline-none",
          isActive &&
            "before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400"
        )}
        href={href}
        aria-current="page"
      >
        {name}
      </Link>
    </div>
  );
};

export default NavbarListItem;
