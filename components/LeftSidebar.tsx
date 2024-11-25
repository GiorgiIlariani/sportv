import { leftSidebarConstants } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="w-[300px] py-[30px] min-h-screen bg-black">
      <Link href="/">
        <Image
          src="/images/sportv.png"
          alt="sport tv"
          width={300}
          height={80}
          className="w-full h-[100px] object-contain"
        />
      </Link>
      <div className="mt-10 px-10 flex flex-col gap-4">
        {leftSidebarConstants.map((item) => (
          <Link
            href={item.route}
            className="text-white font-medium text-base hover:text-blue-400 transition"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
