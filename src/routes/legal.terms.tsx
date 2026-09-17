import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions. HeavenCast" }, { name: "description", content: "The terms governing your use of HeavenCast free streaming assistance services, including dispute resolution policy." }] }),
  component: () => (
    <LegalLayout
      title="Terms & Conditions"
      updated="June 2026"
      sections={[
        {
          id: "nature-of-service",
          heading: "Nature of service",
          body: (
            <div className="space-y-3">
              <p>HeavenCast is an <strong>authorized IPTV distributor dealer</strong>. We provide free assistance services to help individuals set up, troubleshoot, and optimize their streaming devices and services.</p>
              <p>We are <strong>not affiliated with, endorsed by, or acting as agents of</strong> any over-the-top (OTT) streaming platform, on-demand content provider, or subscription service.</p>
              <p>Using our services does not create any relationship between you and any streaming content provider.</p>
            </div>
          ),
        },
        {
          id: "compensation",
          heading: "Compensation model",
          body: (
            <div className="space-y-3">
              <p>HeavenCast does <strong>not charge customers directly</strong> for our assistance services. We are compensated through commissions paid by IPTV distributors for services we provide to customers.</p>
              <p>All setup, troubleshooting, and optimization services are provided at <strong>no cost to customers</strong>.</p>
              <p>No charges, fees, or payments are collected from end users for the services described on this website.</p>
            </div>
          ),
        },
        {
          id: "refund-cancellation",
          heading: "Dispute resolution and service issues",
          body: (
            <div className="space-y-3">
              <p>Since HeavenCast does not charge customers directly, there are no refunds or cancellation fees to process. All services are provided at no direct cost to customers.</p>
              <p><strong>Service issues:</strong> If you are not satisfied with the assistance provided or experience issues with our service, please contact us at <a href="mailto:support@heavencast.com" className="underline">support@heavencast.com</a> to report the issue. We will work to resolve any problems.</p>
              <p>For disputes or concerns, customers may also contact the relevant IPTV distributor directly.</p>
            </div>
          ),
        },
        {
          id: "agreement",
          heading: "Agreement to terms",
          body: <p>By using HeavenCast services you agree to these Terms. If you do not agree, please do not use the services. These Terms constitute the entire agreement between you and HeavenCast regarding the subject matter herein.</p>,
        },
        {
          id: "accounts",
          heading: "Accounts",
          body: <p>You are responsible for activity on your account. Keep your credentials confidential and notify us immediately of any unauthorized use.</p>,
        },
        {
          id: "ip",
          heading: "Intellectual property",
          body: <p>All software, designs, and content are owned by HeavenCast or its licensors and are protected by applicable law. You may not reproduce, distribute, or create derivative works without prior written consent.</p>,
        },
        {
          id: "liability",
          heading: "Limitation of liability",
          body: <p>To the fullest extent allowed by law, we are not liable for indirect, incidental, or consequential damages arising from the use of our services or from third-party hardware, software, or network conditions.</p>,
        },
        {
          id: "changes",
          heading: "Changes to these terms",
          body: <p>We may update these terms. Material changes will be communicated via email or posted on this page at least 30 days in advance. Continued use of our services after the effective date of changes constitutes your acceptance of the updated terms.</p>,
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <div>
              <p>For questions about these terms, refunds, or cancellations:</p>
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
