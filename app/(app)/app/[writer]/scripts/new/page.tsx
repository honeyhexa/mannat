"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, InfoIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  stage: z.string({
    required_error: "Please select a stage for script.",
  }),
  private: z.string({
    required_error: "Please select a stage for script.",
  }),
  abstract: z.string().max(160).min(4),
  genres: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one genre.",
  }),
  country: z.string({
    required_error: "Please select a country.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
  papermark_url: z
    .string()
    .min(15, {
      message: "Papermark must be at least 19 characters.",
    })
    .startsWith("https://papermark.io/view/", {
      message: "Please add a valid Papermark link.",
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  abstract: "I own a computer.",
  genres: [],
  stage: "final-draft",
  private: "public",
  papermark_url: "",
};

export default function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  // });

  function onSubmit(data: ProfileFormValues) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">New Script</h1>
          </div>
        </div>
      </div>
      <div className="container w-full py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be public title for your script. It can be a real
                    title or an alternate title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-8 items-start">
              <FormField
                control={form.control}
                name="stage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stage</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a stage of script" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {STAGES_OF_SCREENPLAY.map((o, i) => (
                          <SelectItem key={i} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {/* You can update the stage of script as you progress. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="private"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Visibility</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an access of script" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ACCESS_OF_SCRIPT.map((o, i) => (
                          <SelectItem key={i} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {/* You can update the stage of script as you progress. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="abstract"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abstract</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can <span>@mention</span> other users and organizations
                    to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genres"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Genres</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
                  </div>
                  <span className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {GENRES.map((item) => (
                      <FormField
                        key={item.value}
                        control={form.control}
                        name="genres"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.value}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  className="border-gray-300"
                                  checked={field.value?.includes(item.value)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.value,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.value
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </span>

                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <div className="grid grid-cols-2 gap-8 items-start">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  // <FormItem>
                  //   <FormLabel>Country</FormLabel>
                  //   <Select
                  //     onValueChange={field.onChange}
                  //     defaultValue={field.value}
                  //   >
                  //     <FormControl>
                  //       <SelectTrigger>
                  //         <SelectValue placeholder="Select a country" />
                  //       </SelectTrigger>
                  //     </FormControl>
                  //     <SelectContent>
                  //       {COUNTRIES.map((o, i) => (
                  //         <SelectItem key={i} value={o.value}>
                  //           {o.label}
                  //         </SelectItem>
                  //       ))}
                  //     </SelectContent>
                  //   </Select>
                  //   <FormDescription>
                  //     {/* You can update the stage of script as you progress. */}
                  //   </FormDescription>
                  //   <FormMessage />
                  // </FormItem>
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel>Country</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              " justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? COUNTRIES.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Select Country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command className="w-full h-64">
                          <CommandInput placeholder="Search Country..." />
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {COUNTRIES.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue("country", language.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2.5">
                    <FormLabel>Language / Film Industry</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              " justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? LANGUAGES.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Select language"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command className="w-full h-64">
                          <CommandInput placeholder="Search language..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {LANGUAGES.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue("language", language.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an access of script" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LANGUAGES.map((o, i) => (
                          <SelectItem key={i} value={o.value}>
                            {o.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
            <br />
            <div className="grid grid-cols-2 gap-8 items-start">
              <FormField
                control={form.control}
                name="papermark_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Papermark Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://papermark.io/view/xxxxxxxxxxxxxxxxxxxxxx"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>This is your Full name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Card>
                <CardHeader>
                  {/* <CardTitle>
      How to get Papermark Link for your Script ?
      </CardTitle> */}
                  <CardDescription>
                    How to get Papermark Link for your Script ?
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <ol className="[&>li]:mt-2">
                    <li className="flex flex-row items-center">
                      <span className="font-mono">1.&nbsp;</span>Login to&nbsp;
                      <Link
                        className="flex flex-row items-center text-blue-500 hover:underline underline-offset-2"
                        href="https://papermark.io/login"
                      >
                        Papermark&nbsp;
                        <ArrowTopRightIcon />
                      </Link>
                    </li>
                    <li className="flex flex-row items-center">
                      <span className="font-mono">2.&nbsp;</span>Click &nbsp;
                      <Link
                        className="flex flex-row items-center text-blue-500 hover:underline underline-offset-2"
                        href="https://papermark.io/documents"
                      >
                        Add New Document&nbsp;
                        <ArrowTopRightIcon />
                      </Link>
                      &nbsp; on top right corner
                    </li>
                    <li className="flex flex-row items-center">
                      <span className="font-mono">3.&nbsp;</span>Copy Link to
                      Clipboard&nbsp;
                      {/* <Link className="flex flex-row items-center" href="/">
                        Papermark&nbsp;
                        <ArrowTopRightIcon />
                      </Link> */}
                    </li>
                  </ol>
                </CardContent>
                {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
              </Card>
            </div>
            <br />
            <Button className="" type="submit">
              Publish Script
            </Button>
            <br />
            <br />
            <br />
          </form>
        </Form>
      </div>
    </div>
  );
}

const STAGES_OF_SCREENPLAY = [
  { label: "Treatment", value: "treatment" },
  { label: "Outline", value: "outline" },
  { label: "Draft", value: "draft" },
  { label: "Revised Draft", value: "revised-draft" },
  { label: "Final Draft", value: "final-draft" },
  { label: "Ready For Production", value: "ready-for-production" },
];

const ACCESS_OF_SCRIPT = [
  { label: "Private", value: "private" },
  { label: "Publicly Accessible", value: "public" },
];

const GENRES = [
  { label: "Action", value: "Action" },
  { label: "Adventure", value: "Adventure" },
  { label: "Comedy", value: "Comedy" },
  { label: "Crime", value: "Crime" },
  { label: "Drama", value: "Drama" },
  { label: "Fantasy", value: "Fantasy" },
  { label: "Historical", value: "Historical" },
  { label: "Historical Fiction", value: "Historical Fiction" },
  { label: "Horror", value: "Horror" },
  { label: "Magical Realism", value: "Magical Realism" },
  { label: "Mystery", value: "Mystery" },
  { label: "Paranoid Fiction", value: "Paranoid Fiction" },
  { label: "Philosophical", value: "Philosophical" },
  { label: "Political", value: "Political" },
  { label: "Romance", value: "Romance" },
  { label: "Thriller", value: "Thriller" },
  { label: "Urban", value: "Urban" },
  { label: "Western", value: "Western" },
  { label: "Science Fiction", value: "Science Fiction" },
  { label: "Animation", value: "Animation" },
  { label: "Documentary", value: "Documentary" },
  { label: "Experimental", value: "Experimental" },
  { label: "Musical", value: "Musical" },
  { label: "Other", value: "Other" },
];

const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Danish", value: "da" },
  { label: "Dutch", value: "nl" },
  { label: "Finnish", value: "fi" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Hebrew", value: "he" },
  { label: "Italian", value: "it" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Norwegian", value: "nb" },
  { label: "Polish", value: "pl" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Spanish", value: "es" },
  { label: "Swedish", value: "sv" },
  { label: "Chinese", value: "zh" },
  { label: "Czech", value: "cs" },
  { label: "Greek", value: "el" },
  { label: "Icelandic", value: "is" },
  { label: "Latvian", value: "lv" },
  { label: "Lithuanian", value: "lt" },
  { label: "Romanian", value: "ro" },
  { label: "Hungarian", value: "hu" },
  { label: "Estonian", value: "et" },
  { label: "Bulgarian", value: "bg" },
  { label: "Croatian", value: "hr" },
  { label: "Serbian", value: "sr" },
  { label: "Irish", value: "ga" },
  { label: "Galician", value: "gl" },
  { label: "Turkish", value: "tr" },
  { label: "Ukrainian", value: "uk" },
  { label: "Hindi", value: "hi" },
  { label: "Macedonian", value: "mk" },
  { label: "Bengali", value: "bn" },
  { label: "Indonesian", value: "id" },
  { label: "Latin", value: "la" },
  { label: "Malay", value: "ms" },
  { label: "Malayalam", value: "ml" },
  { label: "Welsh", value: "cy" },
  { label: "Nepali", value: "ne" },
  { label: "Telugu", value: "te" },
  { label: "Albanian", value: "sq" },
  { label: "Tamil", value: "ta" },
  { label: "Belarusian", value: "be" },
  { label: "Javanese", value: "jw" },
  { label: "Occitan", value: "oc" },
  { label: "Urdu", value: "ur" },
  { label: "Bihari", value: "bh" },
  { label: "Gujarati", value: "gu" },
  { label: "Thai", value: "th" },
  { label: "Arabic", value: "ar" },
  { label: "Catalan", value: "ca" },
  { label: "Esperanto", value: "eo" },
  { label: "Basque", value: "eu" },
  { label: "Interlingua", value: "ia" },
  { label: "Kannada", value: "kn" },
  { label: "Punjabi", value: "pa" },
  { label: "Scots_Gaelic", value: "gd" },
  { label: "Swahili", value: "sw" },
  { label: "Slovenian", value: "sl" },
  { label: "Marathi", value: "mr" },
  { label: "Maltese", value: "mt" },
  { label: "Vietnamese", value: "vi" },
  { label: "Frisian", value: "fy" },
  { label: "Slovak", value: "sk" },
  { label: "Faroese", value: "fo" },
  { label: "Sundanese", value: "su" },
  { label: "Uzbek", value: "uz" },
  { label: "Amharic", value: "am" },
  { label: "Azerbaijani", value: "az" },
  { label: "Georgian", value: "ka" },
  { label: "Tigrinya", value: "ti" },
  { label: "Persian", value: "fa" },
  { label: "Bosnian", value: "bs" },
  { label: "Sinhalese", value: "si" },
  { label: "Norwegian_N", value: "nn" },
  { label: "Xhosa", value: "xh" },
  { label: "Zulu", value: "zu" },
  { label: "Guarani", value: "gn" },
  { label: "Sesotho", value: "st" },
  { label: "Turkmen", value: "tk" },
  { label: "Kyrgyz", value: "ky" },
  { label: "Breton", value: "br" },
  { label: "Twi", value: "tw" },
  { label: "Yiddish", value: "yi" },
  { label: "Serbo_Croatian", value: "sh" },
  { label: "Somali", value: "so" },
  { label: "Uighur", value: "ug" },
  { label: "Kurdish", value: "ku" },
  { label: "Mongolian", value: "mn" },
  { label: "Armenian", value: "hy" },
  { label: "Laothian", value: "lo" },
  { label: "Sindhi", value: "sd" },
  { label: "Rhaeto_Romance", value: "rm" },
  { label: "Afrikaans", value: "af" },
  { label: "Luxembourgish", value: "lb" },
  { label: "Burmese", value: "my" },
  { label: "Khmer", value: "km" },
  { label: "Tibetan", value: "bo" },
  { label: "Dhivehi", value: "dv" },
  { label: "Oriya", value: "or" },
  { label: "Assamese", value: "as" },
  { label: "Corsican", value: "co" },
  { label: "Interlingue", value: "ie" },
  { label: "Kazakh", value: "kk" },
  { label: "Lingala", value: "ln" },
  { label: "Moldavian", value: "mo" },
  { label: "Pashto", value: "ps" },
  { label: "Quechua", value: "qu" },
  { label: "Shona", value: "sn" },
  { label: "Tajik", value: "tg" },
  { label: "Tatar", value: "tt" },
  { label: "Tonga", value: "to" },
  { label: "Yoruba", value: "yo" },
  { label: "Maori", value: "mi" },
  { label: "Wolof", value: "wo" },
  { label: "Abkhazian", value: "ab" },
  { label: "Afar", value: "aa" },
  { label: "Aymara", value: "ay" },
  { label: "Bashkir", value: "ba" },
  { label: "Bislama", value: "bi" },
  { label: "Dzongkha", value: "dz" },
  { label: "Fijian", value: "fj" },
  { label: "Greenlandic", value: "kl" },
  { label: "Hausa", value: "ha" },
  { label: "Haitian_Creole", value: "ht" },
  { label: "Inupiak", value: "ik" },
  { label: "Inuktitut", value: "iu" },
  { label: "Kashmiri", value: "ks" },
  { label: "Kinyarwanda", value: "rw" },
  { label: "Malagasy", value: "mg" },
  { label: "Nauru", value: "na" },
  { label: "Oromo", value: "om" },
  { label: "Rundi", value: "rn" },
  { label: "Samoan", value: "sm" },
  { label: "Sango", value: "sg" },
  { label: "Sanskrit", value: "sa" },
  { label: "Siswant", value: "ss" },
  { label: "Tsonga", value: "ts" },
  { label: "Tswana", value: "tn" },
  { label: "Volapuk", value: "vo" },
  { label: "Zhuang", value: "za" },
  { label: "Ganda", value: "lg" },
  { label: "Manx", value: "gv" },
];

const COUNTRIES = [
  { label: "Afghanistan", value: "AF" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "American Samoa", value: "AS" },
  { label: "Andorra", value: "AD" },
  { label: "Angola", value: "AO" },
  { label: "Antarctica", value: "AQ" },
  { label: "Antigua And Barbuda", value: "AG" },
  { label: "Argentina", value: "AR" },
  { label: "Armenia", value: "AM" },
  { label: "Aruba", value: "AW" },
  { label: "Australia", value: "AU" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
  { label: "Bahamas", value: "BS" },
  { label: "Bahrain", value: "BH" },
  { label: "Bangladesh", value: "BD" },
  { label: "Barbados", value: "BB" },
  { label: "Belarus", value: "BY" },
  { label: "Belgium", value: "BE" },
  { label: "Belize", value: "BZ" },
  { label: "Benin", value: "BJ" },
  { label: "Bermuda", value: "BM" },
  { label: "Bhutan", value: "BT" },
  { label: "Bolivia", value: "BO" },
  { label: "Bosnia And Herzegovina", value: "BA" },
  { label: "Botswana", value: "BW" },
  { label: "Bouvet Island", value: "BV" },
  { label: "Brazil", value: "BR" },
  { label: "British Indian Ocean Territory", value: "IO" },
  { label: "Brunei Darussalam", value: "BN" },
  { label: "Bulgaria", value: "BG" },
  { label: "Burkina Faso", value: "BF" },
  { label: "Burundi", value: "BI" },
  { label: "Cambodia", value: "KH" },
  { label: "Cameroon", value: "CM" },
  { label: "Canada", value: "CA" },
  { label: "Cape Verde", value: "CV" },
  { label: "Cayman Islands", value: "KY" },
  { label: "Central African Republic", value: "CF" },
  { label: "Chad", value: "TD" },
  { label: "Chile", value: "CL" },
  { label: "China", value: "CN" },
  { label: "Christmas Island", value: "CX" },
  { label: "Cocos (Keeling) Islands", value: "CC" },
  { label: "Colombia", value: "CO" },
  { label: "Comoros", value: "KM" },
  { label: "Congo", value: "CG" },
  { label: "Congo, The Democratic Republic Of The", value: "CD" },
  { label: "Cook Islands", value: "CK" },
  { label: "Costa Rica", value: "CR" },
  { label: "Côte D'ivoire", value: "CI" },
  { label: "Croatia", value: "HR" },
  { label: "Cuba", value: "CU" },
  { label: "Cyprus", value: "CY" },
  { label: "Czech Republic", value: "CZ" },
  { label: "Denmark", value: "DK" },
  { label: "Djibouti", value: "DJ" },
  { label: "Dominica", value: "DM" },
  { label: "Dominican Republic", value: "DO" },
  { label: "Ecuador", value: "EC" },
  { label: "Egypt", value: "EG" },
  { label: "El Salvador", value: "SV" },
  { label: "Equatorial Guinea", value: "GQ" },
  { label: "Eritrea", value: "ER" },
  { label: "Estonia", value: "EE" },
  { label: "Ethiopia", value: "ET" },
  { label: "Falkland Islands (Malvinas)", value: "FK" },
  { label: "Faroe Islands", value: "FO" },
  { label: "Fiji", value: "FJ" },
  { label: "Finland", value: "FI" },
  { label: "France", value: "FR" },
  { label: "French Guiana", value: "GF" },
  { label: "French Polynesia", value: "PF" },
  { label: "French Southern Territories", value: "TF" },
  { label: "Gabon", value: "GA" },
  { label: "Gambia", value: "GM" },
  { label: "Georgia", value: "GE" },
  { label: "Germany", value: "DE" },
  { label: "Ghana", value: "GH" },
  { label: "Gibraltar", value: "GI" },
  { label: "Greece", value: "GR" },
  { label: "Greenland", value: "GL" },
  { label: "Grenada", value: "GD" },
  { label: "Guadeloupe", value: "GP" },
  { label: "Guam", value: "GU" },
  { label: "Guatemala", value: "GT" },
  { label: "Guinea", value: "GN" },
  { label: "Guinea-Bissau", value: "GW" },
  { label: "Guyana", value: "GY" },
  { label: "Haiti", value: "HT" },
  { label: "Heard Island And Mcdonald Islands", value: "HM" },
  { label: "Honduras", value: "HN" },
  { label: "Hong Kong", value: "HK" },
  { label: "Hungary", value: "HU" },
  { label: "Iceland", value: "IS" },
  { label: "India", value: "IN" },
  { label: "Indonesia", value: "ID" },
  { label: "Iran, Islamic Republic Of", value: "IR" },
  { label: "Iraq", value: "IQ" },
  { label: "Ireland", value: "IE" },
  { label: "Israel", value: "IL" },
  { label: "Italy", value: "IT" },
  { label: "Jamaica", value: "JM" },
  { label: "Japan", value: "JP" },
  { label: "Jordan", value: "JO" },
  { label: "Kazakhstan", value: "KZ" },
  { label: "Kenya", value: "KE" },
  { label: "Kiribati", value: "KI" },
  { label: "Korea, Democratic People's Republic Of", value: "KP" },
  { label: "Korea, Republic Of", value: "KR" },
  { label: "Kuwait", value: "KW" },
  { label: "Kyrgyzstan", value: "KG" },
  { label: "Lao People's Democratic Republic", value: "LA" },
  { label: "Latvia", value: "LV" },
  { label: "Lebanon", value: "LB" },
  { label: "Lesotho", value: "LS" },
  { label: "Liberia", value: "LR" },
  { label: "Libyan Arab Jamahiriya", value: "LY" },
  { label: "Liechtenstein", value: "LI" },
  { label: "Lithuania", value: "LT" },
  { label: "Luxembourg", value: "LU" },
  { label: "Macao", value: "MO" },
  { label: "Macedonia, The Former Yugoslav Republic Of", value: "MK" },
  { label: "Madagascar", value: "MG" },
  { label: "Malawi", value: "MW" },
  { label: "Malaysia", value: "MY" },
  { label: "Maldives", value: "MV" },
  { label: "Mali", value: "ML" },
  { label: "Malta", value: "MT" },
  { label: "Marshall Islands", value: "MH" },
  { label: "Martinique", value: "MQ" },
  { label: "Mauritania", value: "MR" },
  { label: "Mauritius", value: "MU" },
  { label: "Mayotte", value: "YT" },
  { label: "Mexico", value: "MX" },
  { label: "Micronesia, Federated States Of", value: "FM" },
  { label: "Moldova, Republic Of", value: "MD" },
  { label: "Monaco", value: "MD" },
  { label: "Mongolia", value: "MN" },
  { label: "Montserrat", value: "MS" },
  { label: "Morocco", value: "MA" },
  { label: "Mozambique", value: "MZ" },
  { label: "Myanmar", value: "MM" },
  { label: "Namibia", value: "NA" },
  { label: "Nauru", value: "NR" },
  { label: "Nepal", value: "NP" },
  { label: "Netherlands", value: "NL" },
  { label: "Netherlands Antilles", value: "AN" },
  { label: "New Caledonia", value: "NC" },
  { label: "New Zealand", value: "NZ" },
  { label: "Nicaragua", value: "NI" },
  { label: "Niger", value: "NE" },
  { label: "Nigeria", value: "NG" },
  { label: "Niue", value: "NU" },
  { label: "Norfolk Island", value: "NF" },
  { label: "Northern Mariana Islands", value: "MP" },
  { label: "Norway", value: "NO" },
  { label: "Oman", value: "OM" },
  { label: "Pakistan", value: "PK" },
  { label: "Palau", value: "PW" },
  { label: "Palestinian Territory, Occupied", value: "PS" },
  { label: "Panama", value: "PA" },
  { label: "Papua New Guinea", value: "PG" },
  { label: "Paraguay", value: "PY" },
  { label: "Peru", value: "PE" },
  { label: "Philippines", value: "PH" },
  { label: "Pitcairn", value: "PN" },
  { label: "Poland", value: "PL" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Qatar", value: "QA" },
  { label: "Réunion", value: "RE" },
  { label: "Romania", value: "RO" },
  { label: "Russian Federation", value: "RU" },
  { label: "Rwanda", value: "RW" },
  { label: "Saint Helena", value: "SH" },
  { label: "Saint Kitts And Nevis", value: "KN" },
  { label: "Saint Lucia", value: "LC" },
  { label: "Saint Pierre And Miquelon", value: "PM" },
  { label: "Saint Vincent And The Grenadines", value: "VC" },
  { label: "Samoa", value: "WS" },
  { label: "San Marino", value: "SM" },
  { label: "Sao Tome And Principe", value: "ST" },
  { label: "Saudi Arabia", value: "SA" },
  { label: "Senegal", value: "SN" },
  { label: "Serbia And Montenegro", value: "CS" },
  { label: "Seychelles", value: "SC" },
  { label: "Sierra Leone", value: "SL" },
  { label: "Singapore", value: "SG" },
  { label: "Slovakia", value: "SK" },
  { label: "Slovenia", value: "SI" },
  { label: "Solomon Islands", value: "SB" },
  { label: "Somalia", value: "SO" },
  { label: "South Africa", value: "ZA" },
  { label: "South Georgia And The South Sandwich Islands", value: "GS" },
  { label: "Spain", value: "ES" },
  { label: "Sri Lanka", value: "LK" },
  { label: "Sudan", value: "SD" },
  { label: "Suriname", value: "SR" },
  { label: "Svalbard And Jan Mayen", value: "SJ" },
  { label: "Swaziland", value: "SZ" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "Syrian Arab Republic", value: "SY" },
  { label: "Taiwan, Province Of China", value: "TW" },
  { label: "Tajikistan", value: "TJ" },
  { label: "Tanzania, United Republic Of", value: "TZ" },
  { label: "Thailand", value: "TH" },
  { label: "Timor-Leste", value: "TL" },
  { label: "Togo", value: "TG" },
  { label: "Tokelau", value: "TK" },
  { label: "Tonga", value: "TO" },
  { label: "Trinidad And Tobago", value: "TT" },
  { label: "Tunisia", value: "TN" },
  { label: "Turkey", value: "TR" },
  { label: "Turkmenistan", value: "TM" },
  { label: "Turks And Caicos Islands", value: "TC" },
  { label: "Tuvalu", value: "TV" },
  { label: "Uganda", value: "UG" },
  { label: "Ukraine", value: "UA" },
  { label: "United Arab Emirates", value: "AE" },
  { label: "United Kingdom", value: "GB" },
  { label: "United States", value: "US" },
  { label: "United States Minor Outlying Islands", value: "UM" },
  { label: "Uruguay", value: "UY" },
  { label: "Uzbekistan", value: "UZ" },
  { label: "Vanuatu", value: "VU" },
  { label: "Venezuela", value: "VE" },
  { label: "Viet Nam", value: "VN" },
  { label: "Virgin Islands, British", value: "VG" },
  { label: "Virgin Islands, U.S.", value: "VI" },
  { label: "Wallis And Futuna", value: "WF" },
  { label: "Western Sahara", value: "EH" },
  { label: "Yemen", value: "YE" },
  { label: "Zambia", value: "ZM" },
  { label: "Zimbabwe", value: "ZW" },
];
