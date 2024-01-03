"use client";

import ScriptCard from "@/components/script-card";
import DataGridView from "@/components/data-grid";

export default function AppPage() {

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-background">
      <div className="container w-full py-8">
        <DataGridView view={ScriptCard} />
      </div>
    </div>
  );
}
