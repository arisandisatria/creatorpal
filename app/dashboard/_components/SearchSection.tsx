import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ searchInput }: any) => {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Cari Semua Tools</h2>
      <p>Ayo buat sesuatu hari ini!</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]">
          <Search className="text-primary" />
          <input
            onChange={(event) => searchInput(event.target.value)}
            type="text"
            placeholder="Cari tool"
            className="bg-transparent outline-none placeholder:text-sm text-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
