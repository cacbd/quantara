"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
<section className="hero-gradient pt-40 pb-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-neutral-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <div className="space-y-8 text-neutral-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using the website of Quantara Security Group
                Ltd (quantarasecurity.co.uk) and engaging with our services, you
                accept and agree to be bound by and abide by the terms and
                provision of this agreement. If you do not agree to abide by the
                above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Use License
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                2.1 Permitted Use
              </h3>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Quantara Security Group
                Ltd's website for personal, non-commercial transitory viewing
                only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
                <li>
                  Use automated data collection tools or scrapers without
                  written permission
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">
                2.2 Intellectual Property Rights
              </h3>
              <p>
                The materials on Quantara Security Group Ltd's website are
                copyrighted. Unless otherwise stated, we or our suppliers own
                the intellectual property rights for all material on the
                website. All rights are reserved. You may access this for
                information and personal use subject to restrictions set in
                these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                The materials on Quantara Security Group Ltd's website are
                provided on an 'as is' basis. Quantara Security Group Ltd makes
                no warranties, expressed or implied, and hereby disclaims and
                negates all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
              <p>
                We do not warrant or make any representations concerning the
                accuracy, likely results, or reliability of the use of the
                materials on its internet web site or otherwise relating to such
                materials or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Limitations of Liability
              </h2>
              <p className="mb-4">
                In no event shall Quantara Security Group Ltd or its suppliers
                be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the
                materials on Quantara Security Group Ltd's website, even if we
                have been notified of the possibility of such damage.
              </p>
              <p>
                Our total liability to you for any claims arising from these
                terms shall not exceed £100 or the amount paid for services in
                the preceding 12 months, whichever is greater.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="mb-4">
                The materials appearing on Quantara Security Group Ltd's website
                could include technical, typographical, or photographic errors.
                Quantara Security Group Ltd does not warrant that any of the
                materials on its website are accurate, complete, or current.
              </p>
              <p>
                We may make changes to the materials contained on our website at
                any time without notice. However, we do not make any commitment
                to update the materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p className="mb-4">
                Quantara Security Group Ltd has not reviewed all of the sites
                linked to its website and is not responsible for the contents of
                any such linked site. The inclusion of any link does not imply
                endorsement by us of the site. Use of any such linked website is
                at the user's own risk.
              </p>
              <p>
                If you believe a link on our website is inappropriate, please
                contact us to report it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Modifications
              </h2>
              <p>
                Quantara Security Group Ltd may revise these terms of service
                for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current
                version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of England and Wales, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                located in England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Security Services Terms
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                9.1 Service Agreement
              </h3>
              <p className="mb-4">
                When you engage Quantara Security Group Ltd for security
                services, a separate Service Agreement will be provided and must
                be executed. The terms of the Service Agreement shall supersede
                any conflicting terms in this document.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                9.2 Liability for Security Services
              </h3>
              <p className="mb-4">
                While we provide professional security services using trained
                SIA-licensed personnel, we cannot guarantee prevention of all
                incidents. Our liability for any losses arising from security
                matters shall be limited as outlined in the specific Service
                Agreement.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                9.3 Customer Cooperation
              </h3>
              <p className="mb-4">Customers agree to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  Provide accurate and complete information about security
                  requirements
                </li>
                <li>
                  Grant security personnel safe access to premises as agreed
                </li>
                <li>Communicate any changes to security needs promptly</li>
                <li>
                  Cooperate with our security team and follow their professional
                  recommendations
                </li>
                <li>Pay invoices within agreed payment terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">
                9.4 Confidentiality
              </h3>
              <p>
                Both parties agree to maintain confidentiality regarding
                security protocols, incident reports, and proprietary security
                information. This applies indefinitely after termination of
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Limitation of Remedies
              </h2>
              <p>
                You agree that your exclusive remedy for any claim against us
                shall be limited to the amount you paid for the service, if any.
                In no case shall we be liable for indirect, incidental,
                consequential, special, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Quantara Security Group
                Ltd and its owners, employees, and agents from and against any
                liability, loss, expense, or damage arising from:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your violation of these Terms & Conditions</li>
                <li>Your misuse of our website or services</li>
                <li>Infringement of third-party rights due to your actions</li>
                <li>False or misleading information you provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Cancellation and Refunds
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                12.1 Website Information
              </h3>
              <p className="mb-4">
                Information provided on our website is for guidance only. If you
                wish to cancel a service agreement, the cancellation policy in
                your specific Service Agreement shall apply.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                12.2 Refund Policy
              </h3>
              <p>
                Refunds (if applicable) will be processed within 14 days of
                approval. No refunds will be issued for services already
                rendered. Any applicable refunds will be returned to the
                original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                13. Payment Terms
              </h2>
              <p className="mb-4">
                Payment terms are specified in individual Service Agreements or
                invoices. Payment is due within the timeframe specified. Late
                payments may result in suspension of services and may incur
                additional charges.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                14. Data Protection
              </h2>
              <p>
                Our handling of personal data is governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-[#d4af37] hover:underline"
                >
                  Privacy Policy
                </Link>
                . By using our website and services, you consent to data
                processing as outlined in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                15. Contact Information
              </h2>
              <p className="mb-2">
                <strong>Quantara Security Group Ltd</strong>
              </p>
              <p className="mb-2">128 City Road, London, EC1V 2NX</p>
              <p className="mb-2">Phone: 020 3718 1599</p>
              <p className="mb-2">Mobile: 07762 308545</p>
              <p>Email: info@quantarasecurity.co.uk</p>
            </div>

            <div className="bg-neutral-900 p-6 rounded border border-neutral-800">
              <p className="text-sm text-neutral-400">
                These Terms & Conditions are effective as of July 2026. We
                reserve the right to modify these terms at any time. Continued
                use of our website or services after changes constitutes
                acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
