"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Eye,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
{/* Hero Section */}
      <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[#d4af37] font-semibold text-lg">
                  Beyond Traditional Security.
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  AI-Supported Security Solutions for a{" "}
                  <span className="gold-accent">Safer Tomorrow</span>
                </h1>
              </div>
              <p className="text-lg text-neutral-300 leading-relaxed">
                At Quantara Security, we are committed to protecting people,
                businesses, and properties with professional, dependable
                security solutions. Our SIA-licensed security officers deliver a
                high standard of service, ensuring safety, reliability, and
                peace of mind for every client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="contact" className="btn-primary">
                  Get a Quote
                </Link>
                <Link href="/about" className="btn-secondary block text-center">Learn More</Link>
              </div>
              <div className="flex gap-6 pt-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4af37]" />
                  24/7 Monitoring
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#d4af37]" />
                  Trained Staff
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image
                src="/professionalSecurity.jpeg"
                alt="Professional Security"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="section-spacing bg-neutral-950 border-t border-neutral-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Security Services
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto text-lg mb-6">
              At Quantara Security, we provide professional, reliable and fully
              tailored security solutions for businesses, organisations and
              residential properties across London and the surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "👤",
                label: "Manned Guarding",
                desc: "Professional security personnel",
              },
              {
                icon: "🚗",
                label: "Mobile Patrols",
                desc: "24/7 rapid response coverage",
              },
              {
                icon: "📹",
                label: "CCTV Monitoring",
                desc: "Real-time surveillance",
              },
              {
                icon: "🔑",
                label: "Key Holding",
                desc: "Emergency alarm response",
              },
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold mb-2">{service.label}</h3>
                <p className="text-sm text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="section-spacing">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Security Solutions for Every Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/mobile-pettrol.jpeg",
                title: "Key Holding & Alarm Response",
                desc: "Rapid 24/7 response to your alarm systems with professional key holding services ensuring your property is protected.",
              },
              {
                img: "/corporate-security.jpeg",
                title: "Corporate Security",
                desc: "Professional security personnel for office buildings, headquarters, and corporate events across London and Essex.",
              },
              {
                img: "/event-security.jpeg",
                title: "Event Security",
                desc: "Expert security management for concerts, festivals, sports events, and private functions of any scale.",
              },
              {
                img: "/retail-security.jpeg",
                title: "Retail Security",
                desc: "Comprehensive security solutions for shopping centres, stores, and retail establishments to prevent theft and ensure safety.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="section-spacing bg-neutral-950 border-t border-neutral-800"
      >
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Construction", icon: "🏗️" },
              { title: "Retail", icon: "🛍️" },
              { title: "Hospitality", icon: "🏨" },
              { title: "Residential", icon: "🏘️" },
              { title: "Warehousing", icon: "📦" },
              { title: "Sports Events", icon: "⚽" },
            ].map((item, idx) => (
              <div key={idx} className="service-card text-center p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Grid */}
      <section className="section-spacing">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/quantara-security.jpeg", alt: "Head Office" },
              { src: "/cctv_monitoring.jpeg", alt: "CCTV Monitoring" },
              { src: "/security-vhiacle.jpeg", alt: "Mobile Patrols" },
              {
                src: "/constractun-security.jpeg",
                alt: "Construction Security",
              },
              {
                src: "/female-and-male-security-forces.jpeg",
                alt: "Security Team",
              },
              { src: "/-mobile-petrol.jpeg", alt: "Dog Handler" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <p className="absolute bottom-4 left-4 font-semibold text-sm">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-neutral-950 border-t border-neutral-800">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Quantara Security?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "SIA Licensed",
                desc: "Fully SIA Licensed Security Officers",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "24/7 Professional Customer Support",
              },
              {
                icon: Zap,
                title: "Rapid Response",
                desc: "Rapid Response Team",
              },
              { icon: Eye, title: "Competitive", desc: "Competitive Pricing" },
              { title: "Experienced", desc: "Reliable & Experienced Staff" },
              { title: "Bespoke", desc: "Bespoke Security Solutions" },
              { title: "Compliant", desc: "Fully Insured & Compliant" },
              {
                title: "Local",
                desc: "Serving London and the Surrounding Areas",
              },
            ].map((item, idx) => (
              <div key={idx} className="service-card text-center">
                {item.icon && (
                  <item.icon className="w-12 h-12 gold-accent mx-auto mb-4" />
                )}
                {!item.icon && (
                  <div className="text-4xl gold-accent mx-auto mb-4">✓</div>
                )}
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-black via-neutral-900 to-black border-y border-neutral-800">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Property?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why hundreds of businesses trust
            Quantara Security.
          </p>
          <button className="btn-primary text-lg">
            Request a Free Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact Quantara Security Group Ltd
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "020 3718 1599 / 07762 308545",
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@quantarasecurity.co.uk",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "128 City Road, London, EC1V 2NX",
              },
            ].map((item, idx) => (
              <div key={idx} className="service-card text-center">
                <item.icon className="w-12 h-12 gold-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
  );
}
