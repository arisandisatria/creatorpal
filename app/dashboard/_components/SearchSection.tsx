import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ searchInput }: any) => {
  return (
    <div className="w-full px-6 md:pl-10">
      <div className="flex gap-2 items-center p-2 border border-primary rounded-md bg-white my-5 w-full md:w-[40%]">
        <Search className="text-primary" />
        <input
          onChange={(event) => searchInput(event.target.value)}
          type="text"
          placeholder="Cari tool"
          className="bg-transparent outline-none placeholder:text-sm text-black w-full "
        />
      </div>
    </div>
  );
};

export default SearchSection;
