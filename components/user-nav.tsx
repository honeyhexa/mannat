"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_ITEMS = [
  {
    href: "/app",
    label: "Marketplace",
  },
  {
    href: "/app/writer/scripts",
    label: "My Scripts",
  },
  {
    href: "/app/account",
    label: "Account",
  },
];

const UserNav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
      {NAV_ITEMS.map((o, i) => (
        <Link
          key={i}
          href={o.href}
          className={cn(
            "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
            {
              "text-primary": pathname === o.href,
            }
          )}
        >
          {o.label}
        </Link>
      ))}
    </nav>
  );
};

export default UserNav;
