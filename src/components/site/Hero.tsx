import { Mail, Play, Sparkles, Tv, Volume2, Radio, Star, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-heavencast.jpg";
import { SUPPORT_EMAIL } from "@/lib/contact";

export function Hero() {
  return (
    <section className="relative overflow-hidden -mt-24 pt-32 pb-20 md:pb-28 bg-hero">
      {/* Background ambience */}
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-neon-purple/30 blur-3xl animate-glow" />
      <div className="absolute top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-neon-pink/25 blur-3xl animate-glow" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-neon-blue/25 blur-3xl animate-glow" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Top status strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
            <ShieldCheck className="h-3 w-3 text-neon-pink" />
            Independent Service Provider
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-xs font-medium">
            <Star className="h-3 w-3 text-neon-orange" fill="currentColor" /> 4.9 from 12,400+ homes
          </span>
        </div>

        {/* Centered headline */}
        <div className="text-center max-w-5xl mx-auto animate-fade-up [animation-delay:120ms]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
            Stream the <span className="text-gradient">heavens.</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> Expert setup, every time.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
            HeavenCast provides paid assistance services to help you set up and enjoy your streaming experience.
            We are an independent service provider and are not affiliated with any internet or cable company.
          </p>

          {/* Disclosure box */}
          <div className="mt-6 max-w-2xl mx-auto glass rounded-2xl px-5 py-4 text-sm text-muted-foreground text-left border border-white/10">
            <p className="font-semibold text-foreground mb-1">Service Disclosure</p>
            <p>We provide <strong>paid assistance services</strong> and are not affiliated with any ISP (Xfinity, Spectrum, AT&amp;T, etc.). Service fees range from <strong>$4.99&ndash;$49.99</strong> depending on the request. This is not a free service.</p>
          </div>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="bg-cta text-primary-foreground px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 glow-pink hover:scale-[1.02] transition text-base sm:text-lg"
            >
              <Mail className="h-5 w-5" /> Get Assistance
            </a>
            <a
              href="/services"
              className="glass-strong px-6 sm:px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition"
            >
              <Play className="h-4 w-4" fill="currentColor" />
              View Our Services
            </a>
          </div>
        </div>

        {/* Visual stage with floating cards */}
        <div className="relative mt-14 md:mt-20 animate-fade-up [animation-delay:240ms]">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-8 bg-brand opacity-30 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden ring-gradient shadow-elevated aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={heroImg}
                alt="HeavenCast cinematic streaming experience"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

              {/* Bottom now-playing bar */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 right-3 sm:left-6 sm:right-6 glass-strong rounded-2xl p-3 sm:p-4 flex items-center gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-cta grid place-items-center glow-pink shrink-0">
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Now Streaming</div>
                  <div className="font-semibold truncate text-sm sm:text-base">Cosmic Drift. Live in 4K HDR</div>
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-brand" />
                  </div>
                </div>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hidden sm:inline-flex bg-cta px-4 py-2 rounded-lg text-sm font-semibold items-center gap-1.5 glow-pink shrink-0">
                  <Mail className="h-3.5 w-3.5" /> Get Help
                </a>
              </div>
            </div>

            {/* Floating cards (hidden on small screens) */}
            <div className="hidden lg:flex absolute -left-10 top-12 glass-strong rounded-2xl p-4 w-56 animate-float shadow-elevated items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-neon-blue/30 grid place-items-center">
                <Tv className="h-5 w-5 text-neon-blue" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live</div>
                <div className="font-semibold text-sm">200+ channels</div>
              </div>
            </div>

            <div className="hidden lg:flex absolute -right-8 top-1/3 glass-strong rounded-2xl p-4 w-56 animate-float [animation-delay:1.5s] shadow-elevated items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-neon-pink/30 grid place-items-center">
                <Volume2 className="h-5 w-5 text-neon-pink" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Dolby Atmos</div>
                <div className="font-semibold text-sm">Theater sound</div>
              </div>
            </div>

            <div className="hidden lg:flex absolute -left-6 -bottom-6 glass-strong rounded-2xl px-4 py-3 animate-float [animation-delay:2.5s] shadow-elevated items-center gap-2">
              <Sparkles className="h-4 w-4 text-neon-purple" />
              <span className="text-xs font-semibold">AI Recommendations</span>
            </div>

            <div className="hidden lg:flex absolute -right-6 -bottom-4 glass-strong rounded-2xl px-4 py-3 animate-float [animation-delay:3.5s] shadow-elevated items-center gap-2">
              <Radio className="h-4 w-4 text-neon-blue" />
              <span className="text-xs font-semibold">Zero buffering</span>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { k: "200+", v: "Live channels" },
            { k: "4K", v: "Dolby Vision" },
            { k: "24/7", v: "Human support" },
            { k: "1M+", v: "Happy homes" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Trust marquee */}
        <div className="mt-14 md:mt-20 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap opacity-70">
            {[..."Dolby Vision · HDR10+ · WiFi 6E · AirPlay 2 · Bluetooth 5.3 · Atmos · Chromecast · 8K Ready".split(" · "), ..."Dolby Vision · HDR10+ · WiFi 6E · AirPlay 2 · Bluetooth 5.3 · Atmos · Chromecast · 8K Ready".split(" · ")].map((b, i) => (
              <span key={i} className="text-sm font-semibold tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
