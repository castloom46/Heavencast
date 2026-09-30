import { Section } from "./Section";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Do I need a smart TV to use HeavenCast?", a: "No. Our paid setup help covers devices that plug into any TV with HDMI. You keep your own devices and subscriptions." },
  { q: "Which streaming apps can you help me set up?", a: "We help you set up major apps you already subscribe to, such as Netflix, Disney+, Prime Video, Apple TV+ and YouTube. Separate subscriptions are required — we do not provide channels or content." },
  { q: "Is professional installation included?", a: "Standard device setup guidance is a paid assistance service. In-person installation availability varies by area — call to confirm." },
  { q: "Can I share my subscription with family?", a: "That depends on your own app subscriptions and their rules. We can walk you through profile and parental-control settings in your own accounts." },
  { q: "What about my privacy?", a: "Your viewing data never leaves your account. We don't sell it. Period." },
  { q: "What does it cost, and what if I'm not satisfied?", a: "This is a paid service — the fee is confirmed before any charge. If the service was not delivered as described, contact us within 7 days as described in our Terms." },
  { q: "Can you access my ISP or carrier account for me?", a: "No. We are not affiliated with any ISP and cannot access their systems or accounts. For ISP billing or account issues, contact your ISP directly." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Questions" title={<>Everything you need <span className="text-gradient">to know</span></>}>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left glass-strong rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <Plus className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </div>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
