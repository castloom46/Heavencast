import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-hero ring-gradient p-8 sm:p-12 md:p-20 text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-[60%] bg-brand opacity-30 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Ready to upgrade your <span className="text-gradient">entertainment?</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground">
              One call. Free expert setup. Streaming the same day.
            </p>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <a
                href={PHONE_TEL}
                className="bg-cta px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold flex items-center justify-center gap-3 glow-pink text-lg sm:text-2xl hover:scale-[1.02] transition"
              >
                <Phone className="h-6 w-6" /> {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">Available 24/7 · No wait times · Real US based humans</p>
          </div>
        </div>
      </div>
    </section>
  );
}
