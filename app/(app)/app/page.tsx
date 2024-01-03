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
import ScriptCard from "@/components/script-card";
import DataGrid from "@/components/data-grid";



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
    return <DataGrid data={data} view={ScriptCard} />
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
