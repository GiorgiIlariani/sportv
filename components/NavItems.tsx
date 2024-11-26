import { leftSidebarConstants } from "@/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className="mt-10 px-2 lg:px-10 flex flex-col gap-4">
      {leftSidebarConstants.map((item) => (
        <Link
          key={item.route}
          href={item.route}
          className="text-black font-medium text-base transition"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
