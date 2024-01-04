"use client";

import * as React from "react";

import { useQuery, useQueryClient } from "react-query";

import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns-writer-scripts";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import NewScript from "@/components/new-script";

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
        queryClient.invalidateQueries("writer-scripts");
      });
  };

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
    return <DataTable data={data} columns={columns({ handleDelete })} />;
  };

  return (
    <div className="flex min-h-screen flex-col container">
      <div className="hidden space-y-6 py-10 pb-16 md:block">
        <div className="flex flex-row items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">My Scripts</h2>
            <p className="text-muted-foreground">
              All of your scripts in one place.
            </p>
          </div>
          <div>
            <NewScript />
          </div>
        </div>
        <Separator className="my-6" />
        <RenderTable />
      </div>
    </div>
  );
}
