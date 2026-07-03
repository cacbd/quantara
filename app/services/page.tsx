import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Security Services London & Essex | Quantara Security Group Ltd",
  description:
    "Comprehensive security services including manned guarding, mobile patrols, CCTV monitoring, key holding, and alarm response for businesses across London, Essex & surrounding areas.",
  keywords:
    "security services, manned guarding london, mobile patrols essex, CCTV monitoring, key holding, alarm response",
};

const services = [
  {
    title: "Manned Guarding",
    description:
      "SIA licensed security guards providing professional protection for your premises. We deliver visible security presence with rapid incident response capabilities.",
    features: [
      "SIA Licensed Security Guards",
      "24/7 coverage available",
      "Professional uniforms and equipment",
      "Incident reporting & documentation",
      "Access control management",
    ],
    image: "/quantara-security.jpeg",
  },
  {
    title: "Mobile Patrols",
    description:
      "Rapid-response mobile security patrols across multiple locations with GPS tracking and real-time reporting for maximum coverage.",
    features: [
      "GPS tracked vehicles",
      "Regular patrol schedules",
      "Multi-site coverage",
      "Real-time reporting",
      "Emergency response capability",
    ],
    image: "/security-vhiacle.jpeg",
  },
  {
    title: "CCTV Monitoring & Installation",
    description:
      "Professional CCTV monitoring with installation services. We provide HD camera systems with 24/7 monitoring, cloud storage, and remote access.",
    features: [
      "CCTV Installation",
      "HD camera systems",
      "Real-time 24/7 monitoring",
      "Cloud storage & backup",
      "Remote access capabilities",
      "Professional recording",
    ],
    image: "/cctv_monitoring.jpeg",
  },
  {
    title: "Key Holding & Alarm Response",
    description:
      "Secure key holding service with rapid emergency response team. We minimize downtime with fast alarm response and police liaison.",
    features: [
      "24/7 key holding services",
      "Rapid response team deployment",
      "Police liaison support",
      "Incident logging & reporting",
      "Alarm monitoring",
    ],
    image: "/mobile-pettrol.jpeg",
  },
  {
    title: "Event Security",
    description:
      "Comprehensive security management for events of any scale. We provide crowd control, access management, and emergency response coordination.",
    features: [
      "Crowd management & control",
      "Access control systems",
      "Emergency response planning",
      "Professional event staff",
      "VIP protection",
    ],
    image: "/event-security.jpeg",
  },
  {
    title: "Corporate & Office Security",
    description:
      "Tailored security solutions for businesses, offices, and corporate facilities. Protecting assets, personnel, and maintaining professional environment.",
    features: [
      "Reception & concierge security",
      "Building access control",
      "Asset protection",
      "Executive protection",
      "Risk assessment & consultation",
    ],
    image: "/corporate-security.jpeg",
  },
  {
    title: "Construction Site Security",
    description:
      "Specialized security for construction and development sites. We protect equipment, materials, and personnel with vigilant monitoring.",
    features: [
      "24/7 site coverage",
      "Equipment protection",
      "Perimeter security",
      "Incident response",
      "Site access control",
    ],
    image: "/constractun-security.jpeg",
  },
  {
    title: "Retail Security",
    description:
      "Professional security for retail stores and shopping centers. We provide loss prevention, customer protection, and incident response.",
    features: [
      "Loss prevention",
      "Customer protection",
      "Door supervision",
      "Incident management",
      "Professional staff",
    ],
    image: "/retail-security.jpeg",
  },
  {
    title: "Sports & Event Security",
    description:
      "Specialized security for sports events and large public gatherings. We manage crowds, control access, and ensure attendee safety.",
    features: [
      "Crowd management",
      "Access control",
      "Emergency response",
      "Perimeter security",
      "VIP area protection",
    ],
    image: "/sports-security.jpeg",
  },
  {
    title: "Warehouse & Industrial Security",
    description:
      "Comprehensive security for warehouses, factories, and industrial facilities. We protect valuable inventory and ensure worker safety.",
    features: [
      "Warehouse protection",
      "Inventory safeguarding",
      "Equipment security",
      "Access control",
      "Incident documentation",
    ],
    image: "/wearhouse-security.jpeg",
  },
  {
    title: "Specialized Security Services",
    description:
      "Additional security services including door supervision, traffic management, fire marshals, and emergency security cover.",
    features: [
      "Door supervisors & entry control",
      "Traffic management",
      "Fire marshal services",
      "Emergency security cover",
      "Residential security",
      "Vacant property inspections",
    ],
    image: "/professionalSecurity.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
{/* Header */}
      <section className="hero-gradient pt-40 pb-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Security Services
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Comprehensive security solutions tailored to your specific needs and
            requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-max">
          <p className="text-neutral-300 mb-12 text-lg">
            Quantara Security provides a comprehensive range of professional
            security services tailored to meet the unique requirements of
            businesses, organisations, and residential properties across London
            and the surrounding areas.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-3 gold-accent">
                  {service.title}
                </h2>
                <p className="text-neutral-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li
                        key={fidx}
                        className="flex items-center gap-2 text-neutral-400"
                      >
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-primary mt-auto w-fit">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-neutral-950 border-t border-neutral-800">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Security Solution?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific security requirements and
            receive a tailored quote.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>
      </section>
</main>
  );
}
