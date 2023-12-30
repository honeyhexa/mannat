"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useQueryClient } from "react-query";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  genre: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  papermark_url: z.string().min(15, {
    message: "Papermark must be at least 19 characters.",
  }).startsWith("https://papermark.io/view/", {
    message: "Please add a valid Papermark link.",
}),
});

const CreateScript = () => {
  const queryClient = useQueryClient();
  const { isSignedIn, user, isLoaded } = useUser();
  const [open, setOpen] = useState(false);

  const [saving, setSaving] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      genre: "",
      papermark_url: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setSaving(true);
    console.log(values);

    fetch(`/api/scripts/${user?.id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ author: user?.id, ...values }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Script created successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setSaving(false);
        queryClient.invalidateQueries("writer-scripts");
        setOpen(false);
      });
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="cursor-pointer rounded-md border border-black bg-black px-4 py-2 gap-4 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
          variant="outline"
        >
          Create Script
          <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
            C
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Publish Script</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <br />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Terminator" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your email.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input placeholder="Action" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your Full name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="papermark_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Papermark Link - <Link className="text-blue-500" href="https://papermark.io/login" target="_blank">First add PDF here</Link>
                    
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://papermark.io/view/abcxyz..."
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>This is your Full name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{saving ? "Saving..." : "Save"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateScript;
