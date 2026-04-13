import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Apple Style */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-cream">We Build</span>
              <br />
              <span className="gradient-text">Your Brand&apos;s Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 mb-12 max-w-3xl mx-auto">
              A founder-led branding and digital marketing agency that helps businesses 
              grow with creative strategy, powerful content, and digital visibility.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="https://wa.me/918600042805" 
                target="_blank"
                className="bg-gold text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Get Started Today
              </a>
              <Link 
                href="/pricing"
                className="glass-effect border-2 border-gold text-gold px-10 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative w-64 h-64 mx-auto mb-8 animate-float">
            <Image 
              src="/images/logo.jpg" 
              alt="The Duos Media"
              fill
              className="object-contain rounded-full gold-glow"
            />
          </div>
        </div>
      </section>

      {/* What We Do - Cards */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              We blend creativity, strategy, and technology to build digital experiences that grow your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Branding', description: 'Crafting unique identities that make brands unforgettable.', icon: '🎯' },
              { title: 'Social Media', description: 'Building presence, engagement & community.', icon: '📱' },
              { title: 'Content Creation', description: 'Scroll-stopping content that tells your story.', icon: '🎬' },
              { title: 'Paid Advertising', description: 'Targeted campaigns that bring real ROI.', icon: '📢' },
              { title: 'Creative Design', description: 'Eye-catching designs that communicate.', icon: '🎨' },
              { title: 'Growth Strategy', description: 'Data-driven strategies to scale faster.', icon: '📈' }
            ].map((service, index) => (
              <div 
                key={index}
                className="group glass-effect border border-gold/20 rounded-3xl p-8 hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gold mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-cream/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Apple Style List */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Why Choose <span className="gradient-text">The Duos Media?</span>
          </h2>

          <div className="space-y-6">
            {[
              { title: 'Founder-Led Approach', description: 'You work directly with us, not a big team you&apos;ve never met.', icon: '👥' },
              { title: 'Creative + Strategic', description: 'We don&apos;t just create content, we create impact.', icon: '💡' },
              { title: 'Affordable Solutions', description: 'High-quality services that fit your budget.', icon: '💰' },
              { title: 'Local Focus', description: 'We understand local markets because we&apos;re part of it.', icon: '📍' },
              { title: 'Fast & Flexible', description: 'We&apos;re always one message away when you need us.', icon: '⚡' }
            ].map((reason, index) => (
              <div 
                key={index}
                className="group glass-effect border border-gold/20 rounded-3xl p-8 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold mb-3 group-hover:text-yellow-400 transition-colors">{reason.title}</h3>
                    <p className="text-cream/70 text-lg leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Minimalist */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '100+', label: 'Projects Delivered' },
              { number: 'Trust', label: 'Long-term Partnerships' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-6xl md:text-7xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-cream/70 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Cards */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Café Aroma', review: 'The Duos Media completely changed our online presence. Our footfall increased like never before!' },
              { name: 'FitZone Gym', review: 'Professional and creative. Helped us grow Instagram from 0 to 10K!' },
              { name: 'SkinCare Clinic', review: 'Excellent branding and ad strategies. Much higher quality leads now.' },
              { name: 'The Modern Mart', review: 'Great team! They understand our business and deliver what we need.' }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="glass-effect border border-gold/20 rounded-3xl p-8 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-gold mb-4 text-xl">★★★★★</div>
                <p className="text-cream/80 mb-6 italic leading-relaxed">&quot;{testimonial.review}&quot;</p>
                <p className="text-gold font-semibold">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold via-yellow-600 to-gold animate-pulse"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 mb-12 leading-relaxed">
            Your brand has the potential. We have the strategy, creativity, and passion to make it shine.
          </p>
          <a 
            href="https://wa.me/918600042805" 
            target="_blank"
            className="inline-block bg-gold text-black px-12 py-5 rounded-full font-semibold hover:bg-yellow-400 hover:shadow-2xl hover:shadow-gold/50 transition-all duration-300 transform hover:scale-110 text-xl"
          >
            Start Your Growth Journey
          </a>
        </div>
      </section>
    </main>
  );
}