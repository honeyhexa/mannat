import ClientSection from "@/components/marketing/client-section";
import FaqsSection from "@/components/marketing/faqs-section";
import FeaturesSection from "@/components/marketing/features-section";
import HeroSection from "@/components/marketing/hero-section";
import PricingSection from "@/components/marketing/pricing-section";
import StatsSection from "@/components/marketing/stats-section";
import TestimonialsSection from "@/components/marketing/testimonials-section";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

export const revalidate = 600;

const fontInter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function IndexPage() {
  return (
    <div className={cn("mt-12", fontInter.className)}>
      <HeroSection />
      <ClientSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqsSection />
    </div>
  );
}
