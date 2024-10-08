"use client";

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutputSchema, UserSubscriptionSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

export interface TOTALUSAGE {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

const UsageTrack = () => {
  const { user } = useUser();
  const router = useRouter();

  const [subsId, setSubsId] = useState<string | null>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getData(user.primaryEmailAddress.emailAddress);
      checkSubscribedUser(user.primaryEmailAddress.emailAddress);
    }
  }, [user, updateCreditUsage]);

  const getData = async (email: string) => {
    {
      /* @ts-ignore */
    }
    const result: TOTALUSAGE[] = await db
      .select()
      .from(AIOutputSchema)
      .where(eq(AIOutputSchema.createdBy, email));

    getTotalUsage(result);
  };

  const getTotalUsage = (result: TOTALUSAGE[]) => {
    let total: number = 0;
    result.forEach((el) => {
      total += Number(el.aiResponse?.length);
    });

    setTotalUsage(total);
  };

  const checkSubscribedUser = async (email: string) => {
    const result = await db
      .select()
      .from(UserSubscriptionSchema)
      .where(eq(UserSubscriptionSchema.email, email));

    if (result.length == 0) {
      setSubsId(null);
      setUserSubscription(false);
    } else {
      setSubsId(result[0]?.paymentId);
      setUserSubscription(true);
    }
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credit</h2>
        {!userSubscription && (
          <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
            <div
              className="h-2 bg-white rounded-full overflow-hidden"
              style={{
                width: `calc(${(totalUsage / 10000) * 100}%)`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        )}
        <h2 className="text-sm my-2">
          {userSubscription
            ? "Unlimited Credit"
            : `${totalUsage} / 10.000 credit terpakai`}
        </h2>
      </div>
      <Button
        onClick={() => {
          router.push("/dashboard/billing");
        }}
        variant={"secondary"}
        disabled={userSubscription}
        className="w-full my-3 text-primary hover:bg-primary hover:text-white"
      >
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
