"use client";

import { Loader2 } from "lucide-react";

export default function AppPage() {

  return (
    <div className="min-h-screen flex items-center justify-center w-full flex-1 flex-row overflow-hidden bg-background">
        <Loader2 className="animate-spin" />&nbsp;Loading...
    </div>
  );
}
