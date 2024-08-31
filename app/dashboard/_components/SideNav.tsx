"use client";

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Riwayat",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Pembayaran",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Pengaturan",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  useEffect(() => {}, []);

  return (
    <div className="h-screen realtive p-5 shadow-sm border bg-white">
      <div className="flex justify-center items-center">
        <Image src={"/logo.png"} alt="Logo" width={60} height={60} />
        <h1 className="text-3xl font-semibold">
          <span className="text-primary">Creator</span>
          <span className="text-blue-600">Pal</span>
        </h1>
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={`menu-${index}`}
            className={`${
              path == menu.path && "bg-primary text-white"
            } flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer duration-200 items-center`}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
