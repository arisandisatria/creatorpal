"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import React, { useContext } from "react";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

const Header = ({ toggleSideNav }: { toggleSideNav: () => void }) => {
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  return (
    <>
      <div className="p-5 shadow-sm w-full bg-white border-b-2 gap-10 flex justify-center md:justify-end items-center">
        <Menu
          onClick={toggleSideNav}
          size={35}
          className="sm:hidden cursor-pointer"
        />
        <div className="hidden gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
          <Search />
          <input type="text" placeholder="Cari..." className="outline-none" />
        </div>
        <div className="flex gap-10 items-center text-center">
          <h2
            className={`${
              userSubscription && "hidden"
            } bg-primary p-3 rounded-full text-xs text-white`}
          >
            🔥Gas Berlangganan! cuman 10k/bulan
          </h2>
          <UserButton />
        </div>
      </div>
    </>
  );
};

export default Header;
