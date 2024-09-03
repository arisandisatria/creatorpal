import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-3 md:p-5 shadow-md rounded-md border bg-white flex flex-col gap-2 md:gap-3 cursor-pointer hover:scale-105 transition-all h-48 md:h-52">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <div>
          <h2 className="font-medium text-sm md:text-lg">{item.name}</h2>
          <p className="text-gray-500 line-clamp-3 text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
