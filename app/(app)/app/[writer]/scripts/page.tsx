"use client";

import * as React from "react";

import CreateScript from "@/components/create-script";
import { useQuery, useQueryClient } from "react-query";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns-writer-scripts";
import { toast } from "sonner";

export type Payment = {
  id: string;
  name: string;
  genre: string;
  papermark_url: string;
};

export default function MyScriptsPage() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("writer-scripts", () =>
    fetch(`/api/scripts`).then((res) => res.json())
  );

  const handleDelete = (data: any) => () => {
    console.log(data);
    fetch(`/api/scripts/${data.original.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Script deleted successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        // window.location.reload();
        queryClient.invalidateQueries("writer-scripts");
      });
  };

  const RenderTable = () => {
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Something went wrong!</div>
    return <DataTable data={data} columns={columns({ handleDelete })} />
  }

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">Scripts</h1>
            <CreateScript />
          </div>
        </div>
      </div>
      <div className="container w-full py-8">
        <RenderTable />
      </div>
    </div>
  );
}
