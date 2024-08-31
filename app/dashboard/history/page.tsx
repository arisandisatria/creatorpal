"use client";

import React, { useEffect, useState } from "react";
import HistorySection from "../content/_components/HistorySection";
import { db } from "@/utils/db";
import { AIOutputSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

const History = () => {
  const [historyData, setHistoryData] = useState<any>();
  const { user } = useUser();

  useEffect(() => {
    const fetchDataFromDB = async (email: string) => {
      try {
        const result = await db
          .select()
          .from(AIOutputSchema)
          .where(eq(AIOutputSchema.createdBy, email));
        setHistoryData(result);
      } catch (error) {
        setHistoryData(null);
        console.error("Failed to fetch history data:", error);
      }
    };

    if (user?.primaryEmailAddress?.emailAddress) {
      fetchDataFromDB(user.primaryEmailAddress.emailAddress);
    }
  }, []);

  return (
    <div className="m-7 h-full shadow-md border rounded-lg bg-white">
      <div className="p-5 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-3xl">Riwayat</h2>
          <p className="text-gray-500">Cari semua riwayat kamu disini</p>
        </div>
        <HistorySection data={historyData} />
      </div>
    </div>
  );
};

export default History;
