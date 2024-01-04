import { ProfileForm } from "@/components/profile-form";
import { Separator } from "@/components/ui/separator";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <SignedIn>
        <ProfileForm />
      </SignedIn>
    </div>
  );
};

export default page;
