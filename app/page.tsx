"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { user } = useUser();

  if (user) {
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="text-center mt-20">
        <h1 className="text-7xl font-semibold -ml-8">
          <span className="text-primary">Creator</span>
          <span className="text-blue-600">Pal</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-xl text-center mt-10 font-medium">
          AI super duper canggih yang akan bantu kamu sebagai content creator
          dalam hitungan detik.
        </p>
        <Button
          onClick={() => router.push("/dashboard")}
          className="shadow-md bg-gradient-to-br from-purple-500 to-blue-600 mt-10 p-6 text-lg hover:scale-105 transition-all"
        >
          Get Started
        </Button>
      </div>

      <div className="flex flex-wrap justify-between gap-2 w-full mt-32">
        <div className="flex flex-col justify-between gap-3">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <Image src={"/layout.png"} alt="icon" width={20} height={20} />
          </div>
          <p className="font-semibold text-blue-600">10+ template</p>
          <p>Template yang variatif</p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <Image src={"/comment.png"} alt="icon" width={20} height={20} />
          </div>
          <p className="font-semibold text-blue-600">AI yang canggih</p>
          <p>Menggunakan AI canggih yang pintar</p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <Image src={"/equalizer.png"} alt="icon" width={20} height={20} />
          </div>
          <p className="font-semibold text-blue-600">Mudah digunakan</p>
          <p>Tidak perlu melakukan pengaturan apapun</p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <div className="rounded-lg border-2 border-black p-2 w-fit">
            <Image src={"/dollar.png"} alt="icon" width={20} height={20} />
          </div>
          <p className="font-semibold text-blue-600">Gratis untuk digunakan</p>
          <p>Gunakan semua template dengan gratis</p>
        </div>
      </div>
    </main>
  );
}
