import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import family from "@/assets/family.jpg";
import { BUSINESS_NAME, BUSINESS_ADDRESS, SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HeavenCast" },
      { name: "description", content: "HeavenCast is an authorized IPTV distributor dealer offering free streaming setup services. Learn about our mission and business identity." },
      { property: "og:title", content: "About HeavenCast" },
      { property: "og:description", content: "Authorized IPTV Distributor Dealer. Free streaming setup and support. Commission-based compensation." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Authorized Dealer", d: "We are an authorized IPTV distributor dealer. We do not charge customers — we earn commission from distributors." },
  { t: "Free Services", d: "All setup and assistance services are provided at no cost to customers." },
  { t: "Real support", d: "Every interaction is handled by a real person — no bots, no runaround." },
  { t: "Clear disclosure", d: "We clearly identify ourselves as an authorized dealer on every page." },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title={<>Independent streaming <span className="text-gradient">assistance</span></>}
        subtitle="We provide free streaming assistance services to help you set up and optimize your IPTV and on-demand content experience. HeavenCast is an authorized IPTV distributor dealer."
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
            HeavenCast provides <strong>free streaming assistance services</strong> and is an <strong>authorized IPTV distributor dealer</strong>.
            We do not charge customers directly — we are compensated through commissions from IPTV distributors. Our services are free to all customers.
          </p>
        </div>
      </Section>

      <Section align="left" eyebrow="Our mission" title={<>Streaming help, <span className="text-gradient">done right</span></>}>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg text-muted-foreground">
            Streaming should not require a tech degree. We provide clear, step-by-step free assistance to help you set up and enjoy IPTV platforms, streaming devices, and on-demand services — from initial setup to troubleshooting.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe in full transparency: you know that our services are free, who we are, and how we earn our compensation. No hidden fees. No misleading branding.
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
              <span className="text-foreground">Authorized IPTV Distributor Dealer — Free streaming setup and support</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Compensation Model</span>
              <span className="text-foreground">Commission-based from IPTV distributors. No charges to customers. All services are free.</span>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
