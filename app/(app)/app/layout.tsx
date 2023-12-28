"use client";

import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import { Metadata } from "next";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

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
      <AppFooter />
    </div>
    </QueryClientProvider>
  );
}
