import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery, useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";

const PAGE_SIZE = 12;

const DataGridView = ({ view: View }: any) => {
  const { isLoading, error, data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["marketplace-scripts"],
      queryFn: ({ pageParam = 0 }) =>
        fetch(`/api/scripts/all?page=${pageParam}&pageSize=${PAGE_SIZE}`).then((res) => res.json()),
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < PAGE_SIZE) return false;
        return pages.length;
      },
    });


  if (isLoading)
    return (
      <div className="flex flex-row items-center gap-2">
        {[...new Array(4)].map((_, idx) => (
          <Skeleton key={idx} className="w-full h-72" />
        ))}
      </div>
    );
  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group?.map((o: any, j: number) => (
              <View key={j} {...o} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <Button disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>
      {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </Button>
    </div>
  );
};

export default DataGridView;
