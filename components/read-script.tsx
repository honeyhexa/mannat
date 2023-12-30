"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Text from "./text";
import { useState } from "react";

const ReadScript = ({ papermarkUrl }: { papermarkUrl: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Text
          onClick={() => setOpen(true)}
          className="cursor-pointer flex flex-row items-center hover:underline underline-offset-2"
        >
          Read Script&nbsp;
          <ArrowTopRightIcon />
        </Text>
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="p-0 w-[90%] h-[90%]"
        style={{ maxWidth: "unset" }}
      >
        <iframe src={papermarkUrl} width="100%" height="100%" />
      </DialogContent>
    </Dialog>
  );
};

export default ReadScript;
