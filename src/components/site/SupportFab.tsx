import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export function SupportFab() {
  return (
    <a
      href={PHONE_TEL}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 rounded-full bg-cta px-4 py-3 sm:px-5 sm:py-3.5 text-primary-foreground shadow-elevated glow-pink hover:scale-105 transition-transform"
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <Phone className="h-5 w-5" />
      <span className="font-semibold text-sm hidden sm:inline">{PHONE_DISPLAY}</span>
      <span className="absolute inset-0 rounded-full bg-cta animate-ping opacity-20 -z-10" />
    </a>
  );
}
