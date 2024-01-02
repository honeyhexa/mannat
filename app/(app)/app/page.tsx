"use client";

import * as React from "react";

import { useQuery } from "react-query";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns-marketplace-scripts";
import { Skeleton } from "@/components/ui/skeleton";
import Text from "@/components/text";

import palettes from "nice-color-palettes/1000.json";
import ReadScript from "@/components/read-script";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function hashCode(s: any[]) {
  return [...s].reduce(
    (hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0,
    0
  );
}

export default function AppPage() {
  const { isLoading, error, data } = useQuery("marketplace-scripts", () =>
    fetch(`/api/scripts/all`).then((res) => res.json())
  );

  const RenderTable = () => {
    if (isLoading)
      return (
        <div className="flex flex-col items-center gap-y-1">
          <Skeleton className="w-full h-8 mb-3" />
          <Skeleton className="w-full h-11 mb-2" />
          {[...new Array(9)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-12" />
          ))}
        </div>
      );
    if (error) return <div>Something went wrong!</div>;
    // return <DataTable data={data} columns={columns} />;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((o: any, i: React.Key) => {
          const colors = palettes[Math.abs(hashCode(o.id)) % palettes.length];

          return (
            <div key={i} className="group flex flex-col cursor-pointer pb-10">
              <div className="w-full h-72 bg-zinc-50 group-hover:bg-zinc-100 flex items-center justify-center">
                <div
                  style={{
                    background: `linear-gradient(45deg, ${colors?.[0]}, ${colors?.[1]})`,
                  }}
                  className="w-1/2 h-3/4 bg-zinc-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                ></div>
              </div>
              <Text className="text-base font-semibold pt-4 pb-3">
                {o.name}
              </Text>
              <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col">
                  <Text className="text-xs italic text-muted-foreground">
                    {o.genre}
                  </Text>
                  <Text className="text-xs font-medium pt-1">
                    {o?.Authors?.full_name}
                  </Text>
                </div>
                <div className="flex flex-col">
                  {o.papermark_url ? (
                    // <ReadScript papermarkUrl={o.papermark_url}>
                      <Text className="text-xs font-medium text-blue-500 hover:underline underline-offset-2 flex flex-row">
                    Read Script &nbsp;
            <ArrowTopRightIcon />
                  </Text>
                    // </ReadScript>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* <Text className="text-xs font-medium pt-1">$ 99</Text> */}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-background">
      {/* <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">Marketplace</h1>
          </div>
        </div>
      </div> */}
      <div className="container w-full py-8">
        <RenderTable />
      </div>
    </div>
  );
}
