import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SUPPORT_EMAIL, BUSINESS_ADDRESS } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HeavenCast | Paid Streaming Setup Help" },
      { name: "description", content: "Contact HeavenCast for paid streaming setup help. Call (888) 882-5419 or email support@heavencast.com. Independent provider, not affiliated with any ISP." },
      { property: "og:title", content: "Contact HeavenCast" },
      { property: "og:description", content: "Call or email our streaming setup experts." },
      { property: "og:url", content: "https://heavencast.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://heavencast.com/contact" }],
  }),
  component: ContactPage,
});

const cards = [
  { icon: Phone, t: "Call us 24/7", d: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: Mail, t: "Email", d: SUPPORT_EMAIL },
  { icon: MapPin, t: "Address", d: BUSINESS_ADDRESS },
  { icon: Clock, t: "Hours", d: "24/7 priority support" },
];

function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        titleAs="h1"
        title={<>Let's get you <span className="text-gradient">streaming</span></>}
        subtitle="Questions, demos, partnerships. Our team usually replies in under 5 minutes."
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const subject = encodeURIComponent(`Website inquiry — ${data.get("subject") || "general"}`);
            const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
            window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
          }}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10 space-y-5 ring-gradient"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" placeholder="Alex Doe" name="name" />
            <Field label="Email" placeholder="alex@home.tv" type="email" name="email" />
          </div>
          <Field label="Subject" placeholder="I want help setting up my streaming device" name="subject" />
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us your device model and which apps you need help setting up…"
              className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
            />
          </div>
          <p className="text-xs text-muted-foreground">For the fastest help, call {PHONE_DISPLAY}.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={PHONE_TEL} className="flex-1 bg-cta px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 glow-pink">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <button className="flex-1 glass-strong px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
              Send message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="lg:col-span-2 space-y-4">
          {cards.map((c) => {
            const Inner = (
              <>
                <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground">{c.t}</h3>
                  <div className="font-semibold mt-0.5">{c.d}</div>
                </div>
              </>
            );
            return c.href ? (
              <a key={c.t} href={c.href} className="glass-strong rounded-2xl p-6 flex gap-4 items-start hover:bg-white/[0.06] transition glow-pink">
                {Inner}
              </a>
            ) : (
              <div key={c.t} className="glass-strong rounded-2xl p-6 flex gap-4 items-start">
                {Inner}
              </div>
            );
          })}
          <div className="rounded-2xl overflow-hidden h-64 glass-strong relative">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-hero opacity-60" />
            <div className="absolute inset-0 grid place-items-center text-center px-6">
              <div>
                <MapPin className="h-8 w-8 mx-auto text-neon-pink" />
                <div className="mt-2 font-semibold">{BUSINESS_ADDRESS}</div>
                <div className="text-sm text-muted-foreground">Paid assistance by phone &amp; remote guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section />
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition"
      />
    </div>
  );
}
