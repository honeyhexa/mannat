"use client";

import * as React from "react";

import { useQuery } from "react-query";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns-marketplace-scripts";

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
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Something went wrong!</div>
    return <DataTable data={data} columns={columns} />
  }

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-background">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">Marketplace</h1>
          </div>
        </div>
      </div>
      <div className="container w-full py-8">
        <RenderTable />
      </div>
    </div>
  );
}
