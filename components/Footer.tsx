"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Quantara Security Group Ltd
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Professional security services protecting people, businesses, and
              properties across London, Essex, Hertfordshire, Kent, Surrey and surrounding areas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Manned Guarding
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Mobile Patrols
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  CCTV Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Event Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors text-sm"
                >
                  Key Holding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="text-[#d4af37] flex-shrink-0 mt-1"
                />
                <div>
                  {/*<a href="tel:02037181599" className="text-neutral-400 hover:text-[#d4af37] transition-colors block">020 3718 1599</a>*/}
                  <a href="tel:07762308545" className="text-neutral-400 hover:text-[#d4af37] transition-colors block">07762 308545</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#d4af37] flex-shrink-0 mt-1" />
                <a href="mailto:info@quantarasecurity.co.uk" className="text-neutral-400 hover:text-[#d4af37] transition-colors break-all">info@quantarasecurity.co.uk</a>
              </li>
              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-[#d4af37] flex-shrink-0 mt-1"
                />
                <p className="text-neutral-400">
                  128 City Road, London, EC1V 2NX
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-[#d4af37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-neutral-400 hover:text-[#d4af37] transition-colors">Terms & Conditions</Link>
            <Link href="/cookies" className="text-sm text-neutral-400 hover:text-[#d4af37] transition-colors">Cookie Policy</Link>
            <Link href="/services" className="text-sm text-neutral-400 hover:text-[#d4af37] transition-colors">Services</Link>
            <Link href="/contact" className="text-sm text-neutral-400 hover:text-[#d4af37] transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-neutral-500">
            <p>&copy; 2026 Quantara Security Group Ltd. All rights reserved.</p>
          </div>
        </div>

        {/* Trust Badges & SIA License Info */}
        <div className="text-center text-xs text-neutral-600 border-t border-neutral-800 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-[#d4af37] font-semibold text-sm">
            <span>✓ SIA Licensed Officers</span>
            <span>✓ Fully Insured</span>
            <span>✓ 24/7 Support</span>
            <span>✓ Rapid Response</span>
            <span>✓ Professional Uniformed Staff</span>
            <span>✓ DBS Checked Staff</span>
          </div>
          <p>
            Quantara Security Group Ltd is committed to professional security services.
          </p>
          <p>
            All staff are SIA Licensed Security Officers.
          </p>
        </div>
      </div>
    </footer>
  );
}
