"use client";

import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="bg-slate-100 h-full relative">
            <div className="md:w-64 absolute">
              <SideNav
                closeSideNav={toggleSideNav}
                isSideNavOpen={isSideNavOpen}
              />
            </div>
            <div className="md:ml-64">
              <Header toggleSideNav={toggleSideNav} /> {children}
            </div>
          </div>
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default DashboardLayout;
