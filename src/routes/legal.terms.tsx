import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions. HeavenCast" }, { name: "description", content: "The terms governing your use of HeavenCast paid assistance services, including refund and cancellation policy." }] }),
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
              <p>HeavenCast is an <strong>independent service provider</strong>. We offer paid assistance services to help individuals set up, troubleshoot, and optimize their streaming devices and services.</p>
              <p>We are <strong>not affiliated with, endorsed by, or acting as agents of</strong> any internet service provider (ISP), cable company, or telecom carrier, including but not limited to Xfinity, Spectrum, AT&amp;T, Cox, Verizon, or any other brand.</p>
              <p>Using our services does not create any relationship between you and any ISP.</p>
            </div>
          ),
        },
        {
          id: "pricing",
          heading: "Service fees and pricing",
          body: (
            <div className="space-y-3">
              <p>Our services are <strong>paid</strong>. This is not a free helpline. Service fees range from <strong>$4.99 to $49.99</strong> per request, depending on the type and complexity of the assistance provided.</p>
              <p>The exact fee applicable to your request will be disclosed to you clearly before you are charged. You will have the opportunity to review and confirm the fee before proceeding.</p>
              <p>All prices are in US Dollars (USD) unless otherwise stated.</p>
            </div>
          ),
        },
        {
          id: "refund-cancellation",
          heading: "Refund and cancellation policy",
          body: (
            <div className="space-y-3">
              <p><strong>Cancellation before service delivery:</strong> If you cancel your service request before work has commenced, you are entitled to a full refund. To cancel, contact us at <a href="mailto:support@heavencast.com" className="underline">support@heavencast.com</a> as soon as possible after placing the request.</p>
              <p><strong>Cancellation after service delivery begins:</strong> Once a technician has begun working on your request, partial charges may apply. You will only be charged for the portion of work completed at the time of cancellation.</p>
              <p><strong>Dissatisfaction refunds:</strong> If you are not satisfied with the assistance provided, contact us within <strong>7 days</strong> of service delivery at <a href="mailto:support@heavencast.com" className="underline">support@heavencast.com</a>. We will review your case and, where the service was not delivered as described, issue a full or partial refund at our discretion.</p>
              <p><strong>Non-refundable circumstances:</strong> Refunds will not be issued for services that were delivered as described and accepted by the customer, or for issues arising from third-party hardware, software, or internet service outside our control.</p>
              <p><strong>Refund processing:</strong> Approved refunds are processed within <strong>5&ndash;10 business days</strong> to the original payment method.</p>
              <p><strong>Subscription services (if applicable):</strong> If you subscribe to a recurring service plan, you may cancel at any time before the next billing cycle. Cancellations take effect at the end of the current paid period. No prorated refunds are issued for unused days within a billing period, except where required by applicable law.</p>
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
          body: <p>To the fullest extent allowed by law, our liability is limited to the amount you paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from the use of our services or from third-party hardware, software, or network conditions.</p>,
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
