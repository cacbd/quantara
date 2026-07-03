'use client'

import Link from 'next/link'
import { Phone, MessageCircle, FileText } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/447762308545"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors group relative"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          WhatsApp Us
        </span>
      </a>

      {/* Call Now */}
      <a
        href="tel:02037181599"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors group relative"
        aria-label="Call Now"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Call Now
        </span>
      </a>

      {/* Get a Quote */}
      <Link
        href="/contact"
        className="flex items-center justify-center w-12 h-12 bg-[#d4af37] text-black rounded-full shadow-lg hover:bg-[#c4a132] transition-colors group relative"
        aria-label="Get a Quote"
      >
        <FileText size={24} />
        <span className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Get a Quote
        </span>
      </Link>
    </div>
  )
}
