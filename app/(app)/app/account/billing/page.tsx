"use client";
import BillingForm from "@/components/billing-form";
import { Separator } from "@/components/ui/separator";
import { SignedIn } from "@clerk/nextjs";
import Script from "next/script";
import React from "react";

const BillingPage = () => {
  return (
    <>
      <Script src="https://app.lemonsqueezy.com/js/lemon.js" defer />

    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Your current plan and billing information.
        </p>
      </div>
      <Separator />
      <SignedIn>
        <BillingForm />
      </SignedIn>
    </div>
    </>
  );
};

export default BillingPage;
