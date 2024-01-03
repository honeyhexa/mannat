import React from "react";
import Text from "@/components/text";

import palettes from "nice-color-palettes/1000.json";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import ReadScript from "./read-script";

function hashCode(s: any[]) {
  return [...s].reduce(
    (hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0,
    0
  );
}

const ScriptCard = (o: any) => {
  const colors = palettes[Math.abs(hashCode(o.id)) % palettes.length];
  return (
    <div className="group flex flex-col pb-10">
      <div className="w-full h-72 bg-zinc-50 group-hover:bg-zinc-100 flex items-center justify-center">
        <div
          style={{
            background: `linear-gradient(45deg, ${colors?.[0]}, ${colors?.[1]})`,
          }}
          className="rounded shadow-2xl w-40 h-56 bg-zinc-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
        ></div>
      </div>
      <Text className="text-base font-semibold pt-4 pb-3">{o.name}</Text>
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
          {o.papermark_url && (
            <ReadScript papermarkUrl={o.papermark_url}>
              <Text className="text-xs cursor-pointer font-medium text-blue-500 hover:underline underline-offset-2 flex flex-row">
                Read Script &nbsp;
                <ArrowTopRightIcon />
              </Text>
            </ReadScript>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScriptCard;
