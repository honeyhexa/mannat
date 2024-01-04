"use client";

import AppHeader from "@/components/app-header";
import { Toaster } from "@/components/ui/sonner";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <AppHeader />
        <main>{children}</main>
      </div>
      <Toaster theme="light" richColors />
    </QueryClientProvider>
  );
}
