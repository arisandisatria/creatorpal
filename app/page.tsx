"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import {
  CircleDollarSign,
  LayoutTemplate,
  MessageSquareMore,
  Settings2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { user } = useUser();

  if (user) {
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 md:px-24 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="mt-20 flex flex-col gap-6 md:gap-10 justify-center items-center">
        <h1 className="text-6xl md:text-7xl font-semibold ">
          <span className="text-primary">Creator</span>
          <span className="text-blue-600">Pal</span>
        </h1>
        <p className="text-sm md:text-lg text-slate-700 max-w-xl text-center font-medium">
          AI super duper canggih yang akan bantu kamu sebagai content creator
          dalam hitungan detik.
        </p>
        <Button
          onClick={() => router.push("/dashboard")}
          className="outline-none border-none w-fit shadow-md bg-gradient-to-br from-purple-500 to-blue-600 p-6 text-lg hover:scale-105 transition-all"
        >
          Get Started
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-32">
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <LayoutTemplate color="#2563eb" />
          </div>
          <p className="font-semibold text-blue-600 text-base">10+ tools</p>
          <p className="text-sm">Bermacam-macam tools yang variatif</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <MessageSquareMore color="#2563eb" />
          </div>
          <p className="font-semibold text-blue-600 text-base">
            AI yang advance
          </p>
          <p className="text-sm">Menggunakan AI canggih yang pintar</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <Settings2 color="#2563eb" />
          </div>
          <p className="font-semibold text-blue-600 text-base">
            Mudah digunakan
          </p>
          <p className="text-sm">Tidak perlu melakukan pengaturan apapun</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <CircleDollarSign color="#2563eb" />
          </div>
          <p className="font-semibold text-blue-600 text-base">Gratis</p>
          <p className="text-sm">Gunakan semua tools dengan gratis</p>
        </div>
      </div>
    </main>
  );
}
