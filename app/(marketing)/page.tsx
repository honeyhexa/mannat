import Text from "@/components/text";
import { GENRES, SCRIPTS } from "@/config/dashboard";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export default async function WebPage() {
  return (
    <div className="">
      <section className="mt-32 container flex flex-col gap-4">
        <Text>Genres</Text>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {GENRES.map((o, index) => (
            <Link
              href={`#${o.title.toLowerCase()}`}
              key={index}
              className="border p-8 h-56 bg-white rounded-xl shadow-2xl hover:shadow-md transition duration-500 ease-in-out"
            >
              <Text>{o?.title ?? "Genre"}</Text>
            </Link>
          ))}
        </div>
      </section>
      {GENRES.map((o, index) => (
        <section
          id={o.title.toLowerCase()}
          key={index}
          className="container scroll-m-24 flex flex-col mt-36 mb-16"
        >
          <Text className="text-3xl font-bold tracking-tighter uppercase">
            {o.title}
          </Text>
          <Text className="text-xl text-slate-500 mt-2">{o.subtitle}</Text>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            {SCRIPTS.slice(0, 3).map((s, index) => (
              <li key={index} className={cn(courierPrime.className)}>
                <Link href={`/`}>
                  <div className="bg-white shadow-2xl hover:shadow-md transition duration-500 ease-in-out flex flex-row border rounded h-[36rem]">
                    <div className="flex-1 flex flex-col items-center justify-center ">
                      <Text className="text-xl font-black uppercase text-center">
                        {s?.title}
                      </Text>
                      <Text className="mt-12 text-xl uppercase text-center">
                        written by
                      </Text>
                      <Text className="text-xl font-black uppercase text-center">
                        {s?.writtenBy}
                      </Text>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
