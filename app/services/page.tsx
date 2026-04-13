export default function Services() {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique identities that make your brand unforgettable.',
      features: [
        'Logo Design & Brand Identity',
        'Brand Strategy & Positioning',
        'Visual Identity Systems',
        'Brand Guidelines'
      ]
    },
    {
      title: 'Social Media Management',
      description: 'Building presence, engagement & community across all platforms.',
      features: [
        'Content Calendar Planning',
        'Daily Posting & Scheduling',
        'Community Engagement',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Reels & Content Creation',
      description: 'Scroll-stopping content that tells your story beautifully.',
      features: [
        'Professional Video Production',
        'Trending Reels & Shorts',
        'Story Content Creation',
        'Brand-Focused Storytelling'
      ]
    },
    {
      title: 'Paid Advertising',
      description: 'Targeted ad campaigns that bring real results & ROI.',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads Management',
        'Campaign Setup & Optimization',
        'Performance Tracking'
      ]
    },
    {
      title: 'Creative Designing',
      description: 'Eye-catching designs that communicate your brand.',
      features: [
        'Social Media Graphics',
        'Posters & Banners',
        'Marketing Collateral',
        'Presentation Design'
      ]
    },
    {
      title: 'Growth Strategy',
      description: 'Data-driven strategies to scale your business faster.',
      features: [
        'Market Analysis',
        'Competitor Research',
        'Growth Planning',
        'Strategic Consulting'
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            We blend creativity, strategy, and technology to build digital experiences that grow your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition"
            >
              <h3 className="text-2xl font-bold text-gold mb-4">{service.title}</h3>
              <p className="text-cream/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-cream/80 flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            How We <span className="gradient-text">Do It</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Understand Your Brand', desc: 'We learn about your business, audience, and goals.' },
              { step: '02', title: 'Create Strategy', desc: 'We design a custom plan tailored to your brand and market.' },
              { step: '03', title: 'Execute Content', desc: 'We create and deliver high-quality content that connects.' },
              { step: '04', title: 'Promote & Grow', desc: 'We run targeted campaigns to increase reach, traffic and leads.' },
              { step: '05', title: 'Measure & Improve', desc: 'We analyze performance and optimize for even better results.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{process.step}</div>
                <h3 className="text-lg font-bold text-gold mb-2">{process.title}</h3>
                <p className="text-sm text-cream/70">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your brand grow with our proven strategies and creative solutions.
          </p>
          <a 
            href="https://wa.me/918600042805" 
            target="_blank"
            className="inline-block bg-gold text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 transition text-lg"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}