import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ExperienceBento } from "@/components/site/ExperienceBento";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { WhyUs } from "@/components/site/WhyUs";
import { LiveSports } from "@/components/site/LiveSports";
import { ServicesOverview } from "@/components/site/ServicesOverview";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeavenCast — Stream smarter. Live brighter." },
      { name: "description", content: "Premium streaming devices and entertainment services for the modern home. 4K HDR, voice remote, family profiles." },
      { property: "og:title", content: "HeavenCast — Stream smarter. Live brighter." },
      { property: "og:description", content: "Unlimited streaming. One powerful platform." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <ExperienceBento />
      <FeaturedProducts />
      <WhyUs />
      <LiveSports />
      <ServicesOverview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
