import { Link } from "@tanstack/react-router";
import { Twitter, Instagram, Youtube, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo-heavencast.png";
import { SUPPORT_EMAIL, BUSINESS_NAME, BUSINESS_ADDRESS } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative">
        {/* Contact CTA */}
        <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 mb-16 ring-gradient">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Talk to a <span className="text-gradient">streaming expert</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Real humans, no bots. Paid assistance services available. We are an independent provider, not affiliated with any ISP.
              </p>
            </div>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="bg-cta text-primary-foreground px-6 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition glow-pink text-lg sm:text-xl"
            >
              <Mail className="h-6 w-6" /> {SUPPORT_EMAIL}
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
              Independent service provider offering paid streaming assistance. Not affiliated with Xfinity, Spectrum, AT&amp;T, or any ISP. Service fees: $4.99&ndash;$49.99.
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
              { to: "/legal/terms", label: "Refund Policy" },
              { to: "/legal/disclaimer", label: "Disclaimer" },
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

        {/* Business identity */}
        <div className="mt-10 glass rounded-2xl px-6 py-4 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">Business Identity</p>
          <p>{BUSINESS_NAME} &mdash; {BUSINESS_ADDRESS} &mdash; <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground transition">{SUPPORT_EMAIL}</a></p>
          <p className="mt-1">Independent Service Provider. We provide paid assistance services and are not affiliated with any ISP. Service fees range from $4.99&ndash;$49.99.</p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HeavenCast &mdash; {BUSINESS_NAME}. All rights reserved.</p>
          <p>Independent Service Provider. Not affiliated with any ISP.</p>
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
