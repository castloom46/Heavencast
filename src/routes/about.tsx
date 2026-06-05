import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import family from "@/assets/family.jpg";
import { BUSINESS_NAME, BUSINESS_ADDRESS, SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HeavenCast" },
      { name: "description", content: "HeavenCast is an independent service provider offering paid streaming assistance services. Learn about our mission and business identity." },
      { property: "og:title", content: "About HeavenCast" },
      { property: "og:description", content: "Independent service provider. Paid streaming assistance. Not affiliated with any ISP." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Independent", d: "We are not affiliated with any internet service provider, cable company, or telecom brand." },
  { t: "Transparent pricing", d: "Service fees range from $4.99 to $49.99 depending on the type of assistance requested." },
  { t: "Real support", d: "Every interaction is handled by a real person — no bots, no runaround." },
  { t: "Clear disclosure", d: "We clearly identify ourselves as a paid independent service provider on every page." },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title={<>Independent streaming <span className="text-gradient">assistance</span></>}
        subtitle="We provide paid assistance services to help you set up and enjoy your streaming experience. We are not affiliated with any internet service provider."
      />

      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-gradient">
          <img src={family} alt="Family streaming" width={1280} height={896} loading="lazy" className="w-full h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      {/* Disclosure Banner */}
      <Section className="!py-10">
        <div className="glass-strong rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Service Disclosure</p>
          <p className="text-muted-foreground">
            HeavenCast provides <strong>paid assistance services</strong> and is <strong>not affiliated with any ISP</strong> (Xfinity, Spectrum, AT&amp;T, Cox, or any other carrier).
            We are an independent third-party service provider. Service fees range from <strong>$4.99 to $49.99</strong> depending on the request.
          </p>
        </div>
      </Section>

      <Section align="left" eyebrow="Our mission" title={<>Streaming help, <span className="text-gradient">done right</span></>}>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg text-muted-foreground">
            Streaming should not require a tech degree. We provide clear, step-by-step paid assistance to help you enjoy your devices, apps, and services — from initial setup to troubleshooting.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe in full transparency: you know what you pay for, who we are, and what we can and cannot do for you. No hidden fees. No misleading branding.
          </p>
        </div>
      </Section>

      <Section className="!py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.t} className="glass rounded-2xl p-6">
              <div className="font-bold text-gradient mb-2">{v.t}</div>
              <div className="text-sm text-muted-foreground">{v.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Business Identity */}
      <Section eyebrow="Business Identity" title={<>Who <span className="text-gradient">we are</span></>}>
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="space-y-4 text-base text-muted-foreground">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Business Owner</span>
              <span className="text-foreground font-semibold text-lg">{BUSINESS_NAME}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Address</span>
              <span className="text-foreground">{BUSINESS_ADDRESS}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Email</span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground hover:text-brand transition">{SUPPORT_EMAIL}</a>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Service Type</span>
              <span className="text-foreground">Independent Paid Assistance Provider — Not affiliated with any ISP</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Pricing</span>
              <span className="text-foreground">Service fees range from $4.99 to $49.99 depending on the request</span>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
