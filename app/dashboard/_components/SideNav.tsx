"use client";

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";

const SideNav = ({
  closeSideNav,
  isSideNavOpen,
}: {
  closeSideNav: () => void;
  isSideNavOpen: boolean;
}) => {
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
  return (
    <>
      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={closeSideNav}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 w-64 h-full p-5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Link
          href={"/dashboard"}
          className="flex justify-center items-center -ml-5 md:-ml-0"
        >
          <Image src={"/logo.png"} alt="Logo" width={60} height={60} />
          <h1 className="text-3xl font-semibold -ml-2">
            <span className="text-primary">Creator</span>
            <span className="text-blue-600">Pal</span>
          </h1>
        </Link>
        <hr className="my-2 md:my-6 border" />
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
    </>
  );
};

export default SideNav;
