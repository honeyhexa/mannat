"use client";

import * as React from "react";

import { useQuery } from "react-query";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns-marketplace-scripts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type Author = {
  full_name: string;
};

export type Payment = {
  id: string;
  name: string;
  genre: string;
  papermark_url: string;
  Authors: Author;
};

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
    return <DataTable data={data} columns={columns} />;
  };

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-background">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">Marketplace</h1>
            {/* <Link href="/app/writer/scripts/new">
              <Button
                className="cursor-pointer rounded-md border border-black bg-black px-4 py-2 gap-4 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
                variant="outline"
              >
                New Script
                <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
                  N
                </kbd>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="container w-full py-8">
        <RenderTable />
      </div>
    </div>
  );
}
