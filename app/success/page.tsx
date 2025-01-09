"use client";

import React from "react";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionSchema } from "@/utils/schema";
import { Button } from "@/components/ui/button";

const Success = () => {
  const router = useRouter();
  const { user } = useUser();
  const saveToDB = async () => {
    if (!user?.primaryEmailAddress?.emailAddress || !user?.fullName) {
      console.error("Data user tidak lengkap.");
      return;
    }

    try {
      await db.insert(UserSubscriptionSchema).values({
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        active: true,
        joinDate: moment().format("DD/MM/yyyy"),
        endDate: moment().add(30, "days").format("DD/MM/yyyy"),
      });
      console.log("Data berhasil disimpan ke database.");
    } catch (error) {
      console.error("Gagal menyimpan data ke database:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center border border-red-400 h-screen">
        <h1>SELAMAT!</h1>
        <p>Anda sudah menjadi salah satu dari pelanggan terbaik kami!</p>
        <p>Klik button dibawah untuk kembali ke halaman utama</p>
        <Button
          onClick={() => {
            saveToDB();
            router.replace("/dashboard/billing");
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default Success;
