"use client";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserSubscriptionSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import moment from "moment";
import React, { useContext, useState } from "react";

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
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const checkout = async () => {
    setIsLoading(true);
    const data = {
      id: user?.id,
      orderId: `order-${Math.floor(Math.random() * (999999 - 0 + 1) + 0)}`,
      price: price,
    };

    try {
      const response = await fetch("/api/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Memeriksa apakah respons HTTP bukan status 2xx
      if (!response.ok) {
        const errorMessage = await response.text(); // Membaca pesan error dari respons
        throw new Error(
          `HTTP error! Status: ${response.status}. Message: ${errorMessage}`
        );
      }

      const requestData = await response.json();

      window.snap.pay(requestData.token, {
        onSuccess: async function (result) {
          await db.insert(UserSubscriptionSchema).values({
            email: user?.primaryEmailAddress?.emailAddress,
            username: user?.fullName,
            active: true,
            paymentId: requestData?.subscriptionId.id,
            joinDate: moment().format("DD/MM/yyyy"), // format yang benar
          });
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
      });
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
