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
      { title: "HeavenCast. Paid Streaming Setup Help" },
      { name: "description", content: "Paid guided setup for your streaming devices and apps you already subscribe to. Independent provider. Fees disclosed before you pay." },
      { property: "og:title", content: "HeavenCast. Paid Streaming Setup Help" },
      { property: "og:description", content: "Guided setup help for your own devices and subscriptions." },
      { property: "og:url", content: "https://heavencast.com/" },
    ],
    links: [{ rel: "canonical", href: "https://heavencast.com/" }],
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
