"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
<section className="hero-gradient pt-40 pb-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-neutral-300">Last updated: July 2026</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <div className="space-y-8 text-neutral-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile phone) when you visit a website.
                They contain information that can be retrieved by the website
                server at your next visit.
              </p>
              <p>
                Cookies serve various purposes, including remembering your
                preferences, improving website functionality, and analyzing how
                you use the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Why We Use Cookies
              </h2>
              <p className="mb-4">
                Quantara Security Group Ltd uses cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improve website performance and functionality</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Deliver personalized content</li>
                <li>Analyze user behavior for website improvement</li>
                <li>Provide security features</li>
                <li>Detect and prevent fraud</li>
                <li>Support marketing and analytics efforts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-white mb-3">
                3.1 Essential Cookies (Strictly Necessary)
              </h3>
              <p className="mb-4">
                These cookies are necessary for the website to function
                properly. They enable core functionality such as security,
                authentication, and accessibility.
              </p>
              <table className="w-full text-sm mb-6">
                <tbody className="border border-neutral-800">
                  <tr className="border-b border-neutral-800">
                    <td className="p-3 border-r border-neutral-800">
                      <strong>Cookie Type</strong>
                    </td>
                    <td className="p-3">
                      <strong>Purpose</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3 border-r border-neutral-800">
                      Session ID
                    </td>
                    <td className="p-3">
                      Maintains your session on our website
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3 border-r border-neutral-800">
                      Security
                    </td>
                    <td className="p-3">
                      Protects against fraudulent activities
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-neutral-800">
                      Accessibility
                    </td>
                    <td className="p-3">Remembers accessibility preferences</td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-6 text-sm text-neutral-400">
                <strong>Duration:</strong> Session (deleted when browser closes)
                or 1 year
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                3.2 Performance Cookies (Analytics)
              </h3>
              <p className="mb-4">
                These cookies help us understand how visitors use our website by
                collecting anonymous data.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Google Analytics:</strong> Tracks page views, user
                  behavior, traffic sources, and device information
                </li>
                <li>
                  <strong>Hotjar:</strong> Records user interactions to improve
                  user experience
                </li>
              </ul>
              <p className="mb-6 text-sm text-neutral-400">
                <strong>Duration:</strong> Up to 26 months
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                3.3 Functional Cookies
              </h3>
              <p className="mb-4">
                These cookies remember your choices to provide personalized
                features and improved functionality.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Language preferences</li>
                <li>Form data preferences</li>
                <li>Display preferences</li>
              </ul>
              <p className="mb-6 text-sm text-neutral-400">
                <strong>Duration:</strong> Up to 1 year
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                3.4 Marketing/Targeting Cookies
              </h3>
              <p className="mb-4">
                These cookies are used to display relevant advertisements and
                track marketing campaign performance.
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Facebook Pixel:</strong> For remarketing and audience
                  analysis
                </li>
                <li>
                  <strong>Google Ads:</strong> For display advertising and
                  conversion tracking
                </li>
                <li>
                  <strong>LinkedIn:</strong> For B2B marketing and conversion
                  tracking
                </li>
              </ul>
              <p className="mb-6 text-sm text-neutral-400">
                <strong>Duration:</strong> Up to 2 years
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                3.5 Third-Party Cookies
              </h3>
              <p className="mb-4">
                Third-party cookies may be set by third-party services we use
                for analytics, advertising, or social media integration. These
                are governed by the respective third parties' cookie policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Cookie List Summary
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <tbody className="border border-neutral-800">
                    <tr className="border-b border-neutral-800 bg-neutral-900">
                      <td className="p-3 border-r border-neutral-800">
                        <strong>Service</strong>
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        <strong>Type</strong>
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        <strong>Duration</strong>
                      </td>
                      <td className="p-3">
                        <strong>Purpose</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 border-r border-neutral-800">
                        Google Analytics
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        Analytics
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        26 months
                      </td>
                      <td className="p-3">Track website usage</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 border-r border-neutral-800">
                        Session Cookie
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        Essential
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        Session
                      </td>
                      <td className="p-3">Maintain user session</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 border-r border-neutral-800">
                        Facebook Pixel
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        Marketing
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        2 years
                      </td>
                      <td className="p-3">Remarketing</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-neutral-800">
                        LinkedIn
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        Marketing
                      </td>
                      <td className="p-3 border-r border-neutral-800">
                        1 year
                      </td>
                      <td className="p-3">B2B tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Your Cookie Choices
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">
                5.1 Browser Settings
              </h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Accept all cookies</li>
                <li>Accept only essential cookies</li>
                <li>Reject all non-essential cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive alerts when cookies are set</li>
              </ul>
              <p className="mb-4">
                For more information on how to manage cookies in your browser,
                visit:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Chrome:</strong>{" "}
                  support.google.com/chrome/answer/95647
                </li>
                <li>
                  <strong>Firefox:</strong>{" "}
                  support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer
                </li>
                <li>
                  <strong>Safari:</strong>{" "}
                  support.apple.com/en-us/guide/safari/manage-cookies-sfri11471
                </li>
                <li>
                  <strong>Edge:</strong>{" "}
                  support.microsoft.com/en-us/microsoft-edge/security/privacy
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                5.2 Do Not Track
              </h3>
              <p className="mb-4">
                Some browsers include a "Do Not Track" feature. While we respect
                this setting, we cannot guarantee that all third-party services
                honor it.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                5.3 Opt-Out Options
              </h3>
              <p>You can opt out of specific services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Google Analytics:</strong>{" "}
                  tools.google.com/dlpage/gaoptout
                </li>
                <li>
                  <strong>Facebook Advertising:</strong>{" "}
                  facebook.com/ads/preferences
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  linkedin.com/help/linkedin/answer/62931
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Impact of Disabling Cookies
              </h2>
              <p className="mb-4">
                If you disable cookies, some features of our website may not
                work properly, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Contact form functionality</li>
                <li>Session management</li>
                <li>Preference remembering</li>
                <li>Security features</li>
              </ul>
              <p className="mt-4">
                Essential cookies cannot be disabled and are necessary for the
                website to function.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. GDPR Compliance
              </h2>
              <p className="mb-4">
                In compliance with UK GDPR and ePrivacy Regulations, we:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Obtain explicit consent for non-essential cookies before
                  setting them
                </li>
                <li>Provide clear information about cookie usage</li>
                <li>Allow users to easily manage cookie preferences</li>
                <li>Respect Do Not Track preferences where possible</li>
                <li>Ensure third-party partners are GDPR compliant</li>
                <li>Document our cookie practices transparently</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Local Storage and Similar Technologies
              </h2>
              <p className="mb-4">
                In addition to cookies, we may use similar technologies such as:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>Local Storage:</strong> Store data on your device
                  without expiration
                </li>
                <li>
                  <strong>Web Beacons:</strong> Small images used to track page
                  visits
                </li>
                <li>
                  <strong>Session Storage:</strong> Temporary data storage for
                  the duration of your visit
                </li>
              </ul>
              <p>
                These technologies are subject to the same principles and your
                consent as cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Cookie Policy Updates
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or technology. We will notify you of
                significant changes by posting the updated policy on our website
                with an updated "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Privacy Policy
              </h2>
              <p>
                For information on how we process all personal data (including
                data collected through cookies), please refer to our{" "}
                <Link
                  href="/privacy"
                  className="text-[#d4af37] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Contact Information
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
                This Cookie Policy is effective as of July 2026 and complies
                with UK GDPR, ePrivacy Regulations, and UK Data Protection Act
                2018.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
