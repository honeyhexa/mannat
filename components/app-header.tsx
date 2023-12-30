import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

import Text from "@/components/text";
import Link from "next/link";
import {
  ClerkProvider,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/user-menu";
import UserNav from "@/components/user-nav";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <SignedIn>
            <div className="flex flex-row gap-8">

            <Link href="/app">
              <Text className="text-2xl tracking-tighter uppercase font-black">
                Mannat
              </Text>
            </Link>
            <UserNav />
            </div>

          </SignedIn>
          <SignedOut>
            <Link href="/">
              <Text className="text-2xl tracking-tighter uppercase font-black">
                Mannat
              </Text>
            </Link>
          </SignedOut>
        </div>
        <div>
          <UserMenu />
          <SignedOut>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
