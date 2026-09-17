import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer. HeavenCast" }, { name: "description", content: "Disclaimer for HeavenCast — an independent streaming assistance provider not affiliated with any OTT platform or content service." }] }),
  component: () => (
    <LegalLayout
      title="Disclaimer"
      updated="June 2026"
      sections={[
        {
          id: "streaming-affiliation",
          heading: "No affiliation with any streaming platform or content provider",
          body: (
            <div className="space-y-3">
              <p><strong>HeavenCast is an independent streaming assistance provider and is NOT affiliated with, endorsed by, or in any way connected to any over-the-top (OTT) streaming platform, on-demand content provider, or subscription service.</strong></p>
              <p>This applies to all OTT platforms, streaming services, content providers, and related brands.</p>
              <p>HeavenCast does not represent any of these companies, cannot access their accounts on your behalf, and is not an official customer service channel for any streaming platform or content provider.</p>
            </div>
          ),
        },
        {
          id: "business-model",
          heading: "Business model and compensation",
          body: (
            <p>HeavenCast is an <strong>authorized dealer</strong> for IPTV distribution services. We do not charge customers directly for our services. Instead, we are compensated through commissions paid by IPTV distributors for services we provide. All assistance and setup services are provided at no direct cost to customers.</p>
          ),
        },
        {
          id: "general",
          heading: "General information",
          body: <p>The information on this site is provided for general informational purposes only. We make no warranties of any kind regarding completeness or accuracy of the information provided.</p>,
        },
        {
          id: "third-party",
          heading: "Third party content",
          body: <p>HeavenCast services may involve assistance with IPTV platforms, streaming applications, and devices. We are not responsible for the availability, terms, or content of those third-party platforms. Subscriptions to third-party services are governed by those providers' own terms.</p>,
        },
        {
          id: "external",
          heading: "External links",
          body: <p>Links to external sites are provided for convenience only. We do not endorse the content or practices of any external sites.</p>,
        },
        {
          id: "professional",
          heading: "No professional advice",
          body: <p>Nothing on this site constitutes legal, financial, or professional advice. For questions about streaming subscriptions, billing, or services with content providers, please contact them directly.</p>,
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <div>
              <p>For questions or concerns about this disclaimer:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Email: <a href="mailto:support@heavencast.com" className="underline">support@heavencast.com</a></li>
                <li>Business owner: Sheila Laverne Lipscomb</li>
                <li>Address: 1764 Halifax RD, Danville, VA 24540</li>
              </ul>
            </div>
          ),
        },
      ]}
    />
  ),
});
