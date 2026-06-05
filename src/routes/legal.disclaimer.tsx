import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer. HeavenCast" }, { name: "description", content: "Disclaimer for HeavenCast — an independent service provider not affiliated with any ISP." }] }),
  component: () => (
    <LegalLayout
      title="Disclaimer"
      updated="June 2026"
      sections={[
        {
          id: "isp-affiliation",
          heading: "No affiliation with any ISP",
          body: (
            <div className="space-y-3">
              <p><strong>HeavenCast is an independent service provider and is NOT affiliated with, endorsed by, or in any way connected to any internet service provider (ISP), cable company, or telecom carrier.</strong></p>
              <p>This includes but is not limited to: Xfinity, Comcast, Spectrum, Charter Communications, AT&amp;T, Cox Communications, Verizon, CenturyLink, Frontier, HughesNet, Dish Network, DirecTV, or any other brand.</p>
              <p>HeavenCast does not represent any of these companies, cannot access their systems or accounts on your behalf, and is not a customer service channel for any ISP.</p>
            </div>
          ),
        },
        {
          id: "paid-service",
          heading: "Paid assistance services",
          body: (
            <p>The services offered on this website are <strong>paid assistance services</strong>. We are not a free government program, a charitable service, or a helpline subsidized by any carrier. Service fees range from <strong>$4.99 to $49.99</strong> depending on the request. Fees are disclosed before any charge is made.</p>
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
          body: <p>HeavenCast services may involve assistance with third-party streaming applications and devices. We are not responsible for the availability, terms, or content of those third-party platforms. Subscriptions to third-party services (Netflix, Disney+, etc.) are separate from our assistance fees and are governed by those providers' own terms.</p>,
        },
        {
          id: "external",
          heading: "External links",
          body: <p>Links to external sites are provided for convenience only. We do not endorse the content or practices of any external sites.</p>,
        },
        {
          id: "professional",
          heading: "No professional advice",
          body: <p>Nothing on this site constitutes legal, financial, or professional advice. For questions about ISP accounts, billing, or services, please contact your ISP directly.</p>,
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
