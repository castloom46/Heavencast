import { Phone } from "lucide-react";
import sports from "@/assets/sports.jpg";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function LiveSports() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sports} alt="Television showing a live sports stream in a living room" width={1536} height={1024} loading="lazy" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 glass-strong rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse" />
            GAME-DAY SETUP HELP
          </span>
          <h2 className="mt-5 text-5xl md:text-7xl font-bold leading-[1.05]">
            Get your sports setup <span className="text-gradient">right</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            We help you set up your own sports apps and picture settings for game day, with
            guidance on multi view, stats and replays where your apps support them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="bg-cta px-6 py-3 rounded-xl font-semibold flex items-center gap-2 glow-pink">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={PHONE_TEL} className="glass-strong px-6 py-3 rounded-xl font-semibold">
              Get sports setup help
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[
              { k: "1:1", v: "Guided setup" },
              { k: "4K", v: "Picture tuning" },
              { k: "Same-day", v: "Slots where available" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
