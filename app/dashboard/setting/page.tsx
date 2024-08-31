import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Setting = () => {
  return (
    <div className="flex items-center justify-center h-full my-10">
      <UserProfile routing="hash" />
    </div>
  );
};

export default Setting;
