import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewScript = () => {
  return (
    <Link href="/app/writer/scripts/new">
      <Button
        className="cursor-pointer rounded-md border border-black bg-black px-4 py-2 gap-4 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
        variant="outline"
      >
        New Script
        <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
          N
        </kbd>
      </Button>
    </Link>
  );
};

export default NewScript;
