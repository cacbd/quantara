import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About Us | Quantara Security',
  description: 'At Quantara Security, we are committed to protecting people, businesses, and properties with professional, dependable security solutions across London and Essex.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
{/* Header */}
      <section className="hero-gradient pt-40 pb-12">
        <div className="container-max">
          <p className="text-[#d4af37] font-semibold text-lg mb-2">Beyond Traditional Security.</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Supported Security Solutions for a Safer Tomorrow</h1>
          <p className="text-xl text-neutral-300">Leading professional security provider for London & the surrounding areas</p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                At Quantara Security, we are committed to protecting people, businesses, and properties with professional, dependable security solutions. Our SIA-licensed security officers deliver a high standard of service, ensuring safety, reliability, and peace of mind for every client.
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                We provide a comprehensive range of security services, including manned guarding, mobile patrols, event security, construction site security, retail security, key holding, alarm response, CCTV monitoring, and concierge security. Every service is tailored to meet the unique requirements of our clients. Based in London, we proudly serve businesses and organisations across London and the surrounding areas. Our focus is on professionalism, integrity, rapid response, and outstanding customer service, making Quantara Security a trusted partner for all your security needs.
              </p>
              <p className="text-neutral-300 mb-6 leading-relaxed font-semibold text-lg gold-accent">
                Your Safety Is Our Priority.
              </p>
              <div className="space-y-3">
                {[
                  'Professional SIA-licensed security personnel',
                  '24/7 rapid response capability',
                  'Advanced monitoring technology',
                  'Tailored security solutions',
                  'Transparent communication',
                  'Client-focused approach',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 gold-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/female-and-male-security-forces.jpeg"
                alt="Security Team"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
</main>
  )
}
