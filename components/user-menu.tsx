"use client";

import { SignedIn, SignOutButton, useClerk, useUser } from "@clerk/nextjs";
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
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserMenu = () => {
  const { signOut } = useClerk();
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  return (
    <SignedIn>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.fullName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/app">
            <DropdownMenuItem className="cursor-pointer">
              Marketplace
            </DropdownMenuItem>
          </Link>
        <DropdownMenuSeparator />
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          <Link href="/app/writer/scripts">
            <DropdownMenuItem className="cursor-pointer">
              Scripts
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Earnings</DropdownMenuItem>
          <Link href="/app/writer/profile">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <SignOutButton
            signOutCallback={() => {
              signOut();
              router.push("/");
            }}
          >
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </SignedIn>
  );
};

export default UserMenu;
