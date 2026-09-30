import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Settings, Home, Wrench, CreditCard, Users2, Gauge, Check, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import setupImg from "@/assets/srv-setup.jpg";
import smartImg from "@/assets/srv-smart.jpg";
import installImg from "@/assets/srv-install.jpg";
import supportImg from "@/assets/srv-support.jpg";
import optimizeImg from "@/assets/srv-optimize.jpg";
import bundleImg from "@/assets/srv-bundle.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Streaming Setup Help & Services | HeavenCast" },
      { name: "description", content: "Paid streaming setup help, smart home guidance, and device troubleshooting." },
      { property: "og:title", content: "HeavenCast Services" },
      { property: "og:description", content: "White glove streaming, end to end." },
      { property: "og:url", content: "https://heavencast.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://heavencast.com/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Settings, img: setupImg, title: "Streaming Consultation", desc: "A 30 minute session with a streaming strategist to map out the perfect setup for your home, household and budget.", points: ["Personalized device match", "App stack recommendation", "Cost saving subscription audit"] },
  { icon: Home, img: smartImg, title: "Smart Home Integration", desc: "Unify your TVs, speakers, lights and assistants into a single, scene based entertainment system.", points: ["Works with Alexa, Google, Apple", "Multi room sync", "One tap movie scenes"] },
  { icon: Wrench, img: installImg, title: "Device Setup & Installation", desc: "Experienced technicians mount, wire, and configure your devices, leaving your space spotless.", points: ["Cable management", "Calibration included", "Same-day slots in select areas"] },
  { icon: CreditCard, img: supportImg, title: "Premium Streaming Support", desc: "Priority support and remote diagnostics guidance for your own devices and apps.", points: ["Dedicated specialist", "Priority response", "Guidance during repairs"] },
  { icon: Gauge, img: optimizeImg, title: "Performance Optimization", desc: "Network review and settings tuning to help your own streams run smoothly.", points: ["WiFi review", "Settings tuning", "Streaming checkup report"] },
  { icon: Users2, img: bundleImg, title: "Entertainment Bundles", desc: "We review the subscriptions you already own and suggest ways to save. You keep your own accounts — we never bill for third-party content.", points: ["Subscription review", "Savings suggestions", "You keep your accounts"] },
];

const steps = [
  { n: "01", t: "Discover", d: "Tell us about your space, devices and people." },
  { n: "02", t: "Design", d: "We design a tailored streaming blueprint." },
  { n: "03", t: "Deploy", d: "Pros install and configure everything." },
  { n: "04", t: "Delight", d: "Ongoing paid support whenever you need it." },
];

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        titleAs="h1"
        title={<>Concierge for your <span className="text-gradient">entertainment</span></>}
        subtitle="From first plug to perfect picture. We handle every detail so you just press play."
      />

      <div className="container mx-auto px-6 -mt-12">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-8 glass-strong rounded-3xl p-8 md:p-12 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-brand grid place-items-center glow-purple">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground text-lg">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-neon-pink" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href={PHONE_TEL} className="mt-8 inline-flex items-center gap-2 bg-cta px-6 py-3 rounded-xl font-semibold glow-pink">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl ring-gradient overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={576} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                <div className="absolute -bottom-10 -right-10 h-48 w-48 bg-brand opacity-30 blur-3xl rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section eyebrow="Process" title={<>How it <span className="text-gradient">works</span></>}>
        <div className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient">{s.n}</div>
              <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
