"use client";

import { usePathname, useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

interface PROPS {
  plan: string;
  price: string;
  planDuration: string;
  credits: string;
  historyDuration: string;
  subscriptionStatus: string;
}

const BillingCards = ({
  plan,
  price,
  planDuration,
  credits,
  historyDuration,
  subscriptionStatus,
}: PROPS) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  useEffect(() => {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);
    const statusCode = params.get("status_code");

    if (statusCode && statusCode === "200") {
      router.push("/success");
    }
  }, [window.location.href]);

  const checkout = async () => {
    setIsLoading(true);
    const data = {
      id: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
      firstName: user?.firstName,
      lastName: user?.lastName,
      orderId: Math.floor(Math.random() * (999999 - 0 + 1) + 0),
      price: price,
    };

    try {
      const secret = process.env.NEXT_PUBLIC_SECRET;
      if (secret) {
        const encodedSecret = Buffer.from(secret).toString("base64");
        const basicAuth = `Basic ${encodedSecret}`;
        const response = await fetch("/api/create-subscription", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: basicAuth,
          },
          body: JSON.stringify(data),
        });

        const requestData = await response.json();

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}.`);
        }

        window.snap.pay(requestData.token, {
          onSuccess: function (result) {
            console.log("success");
            console.log(result);
            setIsLoading(false);
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
            setIsLoading(false);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
            setIsLoading(false);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
            setIsLoading(false);
          },
          uiMode: "deeplink",
        });
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.error("Error during subscription creation:", error.message);
        alert(
          "An error occurred while creating the subscription. Please try again later."
        );
      } else {
        console.error("An unknown error occurred:", error);
        alert("An unknown error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full md:w-[50%] rounded-2xl shadow-md bg-white py-6 px-10 flex flex-col justify-center items-center">
      <h4 className="font-bold text-xl">{plan}</h4>
      <p className="my-5">
        <span className="font-bold text-3xl ">Rp {price}</span> /{planDuration}
      </p>
      <ul className="mb-7 flex flex-col gap-2">
        <li className="before:content-['✔']"> {credits} credit</li>
        <li className="before:content-['✔']"> Akses ke 10+ konten</li>
        <li className="before:content-['✔']"> Download & Copy tanpa batas</li>
        <li className="before:content-['✔']">
          {" "}
          Penyimpanan Riwayat {historyDuration}
        </li>
      </ul>

      <Button
        onClick={() => checkout()}
        disabled={userSubscription || subscriptionStatus == "Sedang Aktif"}
        className={`bg-gray-600 rounded-full py-5 w-full text-white ${
          !userSubscription &&
          subscriptionStatus != "Sedang Aktif" &&
          "bg-white border-2 border-primary text-primary hover:text-white"
        }`}
      >
        {isLoading && <Loader2 className="animate-spin mr-2" />}
        {subscriptionStatus}
      </Button>
    </div>
  );
};

export default BillingCards;
