import { FasterSmarterBeautifulBento } from "@/components/first-section";
import { Hero } from "@/components/hero-section";
import { ShareConnectPaidWidgetBento } from "@/components/second-section";
import { OpenBuildTemplateBento } from "@/components/third-section";
import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";

export const revalidate = 600;

const fontCaveat = Caveat({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export default async function IndexPage() {
  // const starCount = await fetch('https://api.github.com/repos/documenso/documenso', {
  //   headers: {
  //     accept: 'application/vnd.github.v3+json',
  //   },
  // })
  //   .then(async (res) => res.json())
  //   .then((res) => (typeof res.stargazers_count === 'number' ? res.stargazers_count : undefined))
  //   .catch(() => undefined);

  return (
    <div className={cn("mt-12", fontCaveat.variable)}>
      <Hero />

      <FasterSmarterBeautifulBento className="container my-48" />
      <ShareConnectPaidWidgetBento className="container my-48" />
      {/* <OpenBuildTemplateBento className="container my-48" /> */}

      {/* <Callout starCount={starCount} /> */}
    </div>
  );
}
