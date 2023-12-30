"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserNav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/app"
        className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", {
            "text-primary": pathname === "/app",
        })}
      >
        Marketplace
      </Link>
      <Link
        href="/app/writer/scripts"
        className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-primary", {
            "text-primary": pathname === "/app/writer/scripts",
        })}
      >
        Scripts
      </Link>
    </nav>
  );
};

export default UserNav;
