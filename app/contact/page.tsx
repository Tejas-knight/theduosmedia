'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918600042805?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Your brand deserves visibility, trust, and growth. Let&apos;s make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 border border-gold/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cream/80 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-cream/80 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-cream/80 mb-2">
                  Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="Branding">Branding</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                  <option value="Creative Designing">Creative Designing</option>
                  <option value="Growth Strategy">Growth Strategy</option>
                  <option value="Custom Package">Custom Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-cream/80 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black py-4 rounded-full font-semibold hover:bg-yellow-500 transition text-lg"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/50 border border-gold/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-1">Phone</h3>
                    <a href="tel:8600042805" className="text-cream/70 hover:text-gold transition">
                      8600042805
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-1">Email</h3>
                    <a href="mailto:theduosmedia@gmail.com" className="text-cream/70 hover:text-gold transition">
                      theduosmedia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/the_duos_media" 
                      target="_blank"
                      className="text-cream/70 hover:text-gold transition"
                    >
                      @the_duos_media
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/918600042805" 
                      target="_blank"
                      className="text-cream/70 hover:text-gold transition"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gold mb-4">Fast Response Time</h3>
              <p className="text-cream/70 mb-4">
                We&apos;re always one message away when you need us most. Expect a response within 24 hours.
              </p>
              <p className="text-sm text-cream/50">
                Business Hours: Mon-Sat, 10 AM - 7 PM IST
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gold mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-cream/80">
                  <span className="text-gold mr-2">✓</span>
                  <span>Direct communication with founders</span>
                </li>
                <li className="flex items-start text-cream/80">
                  <span className="text-gold mr-2">✓</span>
                  <span>Tailored solutions for your business</span>
                </li>
                <li className="flex items-start text-cream/80">
                  <span className="text-gold mr-2">✓</span>
                  <span>Transparent pricing & timelines</span>
                </li>
                <li className="flex items-start text-cream/80">
                  <span className="text-gold mr-2">✓</span>
                  <span>Proven track record with 50+ clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Prefer a Quick Call?</h2>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            Sometimes a conversation is better than messages. Call us directly or schedule a meeting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:8600042805"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/918600042805"
              target="_blank"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}