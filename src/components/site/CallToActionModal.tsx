import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function CallToActionModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Auto-close modal after 8 seconds if not closed manually
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] animate-fade-up max-w-lg w-full mx-auto px-4">
        <div className="relative bg-hero ring-gradient rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to <span className="text-gradient">upgrade your streaming?</span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Get expert IPTV setup assistance. Free consultation available 24/7.
            </p>

            {/* Call Button */}
            <a
              href={PHONE_TEL}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-3 bg-cta text-primary-foreground px-8 py-4 rounded-xl font-bold glow-pink hover:scale-[1.02] transition text-lg mb-4 w-full"
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition"
            >
              Maybe later
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 h-40 w-40 bg-neon-purple/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-neon-pink/20 blur-3xl rounded-full" />
        </div>
      </div>
    </>
  );
}
