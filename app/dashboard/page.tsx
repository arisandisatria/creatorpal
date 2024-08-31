"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearhInput] = useState<string>();

  return (
    <div>
      <SearchSection
        searchInput={(value: string) => setUserSearhInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
