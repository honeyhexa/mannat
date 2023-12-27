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

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <Link href="/">
            <Text className="text-2xl tracking-tighter uppercase font-black">
              Mannat
            </Text>
          </Link>
        </div>
        <div>
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/iarthstar.png" />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/app/writer/scripts">
                  <DropdownMenuItem className="cursor-pointer">Scripts</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Earnings</DropdownMenuItem>
                <Link href="/app/writer/profile">
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <SignOutButton>
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </SignOutButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
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
