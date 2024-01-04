"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "react-query";

const BillingForm = () => {
  const { user } = useUser();
  const { data, isLoading, error, isSuccess } = useQuery(
    ["author-get", user?.id],
    () => fetch(`/api/authors/${user?.id}`).then((res) => res.json())
  );

  useEffect(() => {
    (window as any)?.createLemonSqueezy?.();
  }, []);

  const clickHandler = () => {
    const URL =
      "https://honeyhexa.lemonsqueezy.com/checkout/buy/df81540d-d881-4836-9bcc-88b8d41b7a51?embed=1" +
      "&checkout[email]=" +
      data?.[0]?.email +
      "&checkout[name]=" +
      encodeURI(data?.[0]?.full_name);

    (window as any)?.createLemonSqueezy?.();
    (window as any)?.LemonSqueezy?.Url?.Open(URL);
  };

  return (
    <div>
      <Button
        disabled={isLoading || !isSuccess}
        onClick={clickHandler}
        variant="default"
      >
        Subscribe Now
      </Button>
    </div>
  );
};

export default BillingForm;
