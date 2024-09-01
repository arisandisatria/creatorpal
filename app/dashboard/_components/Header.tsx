import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm bg-white border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Cari..." className="outline-none" />
      </div>
      <div className="flex gap-10 items-center">
        <h2 className="bg-primary p-3 rounded-full text-xs text-white px-2">
          🔥Gas Berlangganan! cuman 10k/bulan
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
