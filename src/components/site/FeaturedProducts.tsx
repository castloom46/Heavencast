import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import box from "@/assets/device-box.jpg";
import stick from "@/assets/device-stick.jpg";
import hub from "@/assets/device-hub.jpg";
import cinema from "@/assets/device-cinema.jpg";

const products = [
  { name: "StreamBox Ultra", slug: "streambox-ultra", tag: "Flagship", desc: "8K HDR, Wi-Fi 6E, AI upscaling.", img: box, glow: "glow-purple" },
  { name: "StreamStick Pro", slug: "streamstick-pro", tag: "Portable", desc: "4K HDR in your pocket.", img: stick, glow: "glow-pink" },
  { name: "SmartBeam Hub", slug: "smartbeam-hub", tag: "Smart Home", desc: "Voice-first whole-home control.", img: hub, glow: "glow-blue" },
  { name: "HomeCinema Max", slug: "homecinema-max", tag: "Theater", desc: "Soundbar + streamer in one.", img: cinema, glow: "" },
];

export function FeaturedProducts() {
  return (
    <Section
      eyebrow="Featured Devices"
      title={<>Hardware that <span className="text-gradient">disappears</span></>}
      subtitle="Every device is designed to feel invisible, until the magic begins."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="group relative rounded-3xl glass-strong overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-500"
          >
            <Link
              to="/products"
              hash={p.slug}
              aria-label={`View ${p.name} details`}
              className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-pink rounded-3xl"
            />
            <div className={`relative aspect-square overflow-hidden ${p.glow}`}>
              <img
                src={p.img}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 glass rounded-full text-xs px-3 py-1">{p.tag}</span>
            </div>
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
              <a
                href={PHONE_TEL}
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 mt-5 bg-cta px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 glow-pink text-sm"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
