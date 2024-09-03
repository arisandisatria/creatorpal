"use client";

import React, { useContext, useEffect, useState } from "react";
import BillingCards from "../_components/BillingCards";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

const Billing = () => {
  const [isSnapLoaded, setIsSnapLoaded] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  useEffect(() => {
    const snapUrl = "https://app.midtrans.com/snap/v1/transactions";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    if (clientKey) {
      const script = document.createElement("script");
      script.src = snapUrl;
      script.setAttribute("data-client-key", clientKey);
      script.async = true;

      script.onload = () => {
        setIsSnapLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="py-10 md:py-20 flex flex-col gap-10 justify-center items-center h-full">
      <h2 className="text-2xl text-center md:text-3xl font-semibold px-6">
        Upgrade Sekarang dan Dapatkan Keuntungannya!
      </h2>
      <div className="flex flex-col md:flex-row gap-3">
        <BillingCards
          plan={"Free"}
          price={"0"}
          planDuration="selamanya"
          credits="10.000"
          historyDuration="1 bulan"
          subscriptionStatus={
            userSubscription ? "Sudah Berlangganan" : "Sedang Aktif"
          }
        />
        <BillingCards
          plan={"Bulanan"}
          price={"10000"}
          planDuration="bulan"
          credits="Unlimited"
          historyDuration="1 bulan"
          subscriptionStatus={
            userSubscription ? "Sedang Aktif" : "Berlangganan sekarang"
          }
        />
      </div>
    </div>
  );
};

export default Billing;
