"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "react-query";
import { useEffect } from "react";
import { toast } from "sonner";

const profileFormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  user_name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4).optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
  const { user } = useUser();
  const { data, isLoading, error } = useQuery(["author-get", user?.id], () =>
    fetch(`/api/authors/${user?.id}`).then((res) => res.json())
  );

  const mutation = useMutation({
    mutationFn: (values: any) =>
      fetch(`/api/authors/${user?.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json()),
    onSuccess: () => {
      toast.success("Profile updated successfully!");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    mutation.mutate(data);
  }

  useEffect(() => {
    if (!isLoading && data) {
      form.setValue("user_name", data?.[0]?.user_name);
      form.setValue("email", data?.[0]?.email);
      form.setValue("full_name", data?.[0]?.full_name);
    }
  }, [data, form, isLoading]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input readOnly placeholder="iarthstar@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Arth K. Gajjar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="iarthstar" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={mutation.isLoading} type="submit">
          {mutation.isLoading ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
}
