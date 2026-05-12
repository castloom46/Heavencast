import { Link } from "@tanstack/react-router";
import { Twitter, Instagram, Youtube, Facebook, Phone } from "lucide-react";
import logo from "@/assets/logo-heavencast.png";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative">
        {/* Call CTA */}
        <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 mb-16 ring-gradient">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Talk to a <span className="text-gradient">streaming expert</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Real humans, no bots. Free setup, free advice. Call us right now.
              </p>
            </div>
            <a
              href={PHONE_TEL}
              className="bg-cta text-primary-foreground px-6 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition glow-pink text-lg sm:text-xl"
            >
              <Phone className="h-6 w-6" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="HeavenCast logo" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl font-bold">
                Heaven<span className="text-gradient">Cast</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              The smartest way to stream. Devices, services, and a connected entertainment
              ecosystem built for modern homes.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { to: "/products", label: "Devices" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "Our story" },
              { to: "/contact", label: "Support" },
              { to: "/services", label: "Partners" },
              { to: "/products", label: "Press" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { to: "/legal/privacy", label: "Privacy Policy" },
              { to: "/legal/terms", label: "Terms & Conditions" },
              { to: "/legal/disclaimer", label: "Disclaimer" },
              { to: "/legal/cookies", label: "Cookie Policy" },
            ]}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HeavenCast Inc. All rights reserved.</p>
          <p>Crafted for the modern living room.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-foreground/80 hover:text-foreground transition story-link"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
