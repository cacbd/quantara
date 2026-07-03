'use client'

import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    location: '',
    message: '',
    preferredContact: 'Email',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@quantarasecurity.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Enquiry from ${formData.name} - ${formData.serviceRequired}`,
          ...formData
        })
      });

      if (response.ok) {
        setFormMessage('Thank you. Your enquiry has been received. A member of Quantara Security will contact you shortly.')
        setFormData({ 
          name: '', companyName: '', phone: '', email: '', 
          serviceRequired: '', location: '', message: '', preferredContact: 'Email' 
        })
      } else {
        setFormMessage('An error occurred. Please try again.')
      }
    } catch (error) {
      setFormMessage('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
{/* Header */}
      <section className="hero-gradient pt-40 pb-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Quantara Security Group Ltd</h1>
          <p className="text-xl text-neutral-300">Get in touch today for a free, no-obligation security consultation and quotation.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 gold-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-neutral-400">📞 Office: <a href="tel:02037181599" className="hover:text-[#d4af37] transition-colors">020 3718 1599</a></p>
                      <p className="text-neutral-400">📱 Mobile: <a href="tel:07762308545" className="hover:text-[#d4af37] transition-colors">07762 308545</a></p>
                      <p className="text-neutral-400 text-sm">Available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 gold-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-neutral-400">📧 <a href="mailto:info@quantarasecurity.co.uk" className="hover:text-[#d4af37] transition-colors">info@quantarasecurity.co.uk</a></p>
                      <p className="text-neutral-400 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 gold-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Head Office</h3>
                      <p className="text-neutral-400">Quantara Security Ltd</p>
                      <p className="text-neutral-400">128 City Road</p>
                      <p className="text-neutral-400">London, EC1V 2NX</p>
                      <p className="text-neutral-400">United Kingdom</p>
                    </div>
                  </div>
                </div>

                <div className="service-card">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 gold-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Office Hours</h3>
                      <p className="text-neutral-400">24/7 Customer Support</p>
                      <p className="text-neutral-400 text-sm">Our team is available around the clock to respond to security enquiries, emergency call-outs and service requests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              {formMessage && (
                <div className={`mb-6 p-4 rounded text-center ${formMessage.includes('Thank') ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
                  {formMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name (Optional)</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="+44..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Required *</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="Manned Guarding">Manned Guarding</option>
                      <option value="Mobile Patrols">Mobile Patrols</option>
                      <option value="CCTV Monitoring">CCTV Monitoring</option>
                      <option value="Key Holding">Key Holding</option>
                      <option value="Event Security">Event Security</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                      placeholder="e.g. London"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="preferredContact" value="Email" checked={formData.preferredContact === 'Email'} onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })} className="accent-[#d4af37]" /> Email
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="preferredContact" value="Phone" checked={formData.preferredContact === 'Phone'} onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })} className="accent-[#d4af37]" /> Phone
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded px-4 py-3 text-white placeholder-neutral-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button type="submit" disabled={isLoading} className={`btn-primary w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-sm text-neutral-400 text-center">We'll respond within 24 business hours</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-neutral-950 border-t border-neutral-800">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How quickly can you deploy security?',
                a: 'We can typically deploy within 24-48 hours depending on your specific requirements.',
              },
              {
                q: 'Are your guards licensed?',
                a: 'Yes, all our security personnel are fully SIA licensed and professionally trained.',
              },
              {
                q: 'Do you offer 24/7 services?',
                a: 'Yes, all of our services are available 24/7 including weekends and holidays.',
              },
              {
                q: 'Can you customize security solutions?',
                a: 'Absolutely. We assess your specific needs and create tailored security solutions.',
              },
              {
                q: 'What areas do you cover?',
                a: 'We provide comprehensive coverage across London and Essex with rapid response capabilities.',
              },
              {
                q: 'Do you provide CCTV systems?',
                a: 'Yes, we offer both CCTV installation and 24/7 professional monitoring services.',
              },
            ].map((item, idx) => (
              <div key={idx} className="service-card">
                <h3 className="font-bold mb-2 gold-accent">{item.q}</h3>
                <p className="text-neutral-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
