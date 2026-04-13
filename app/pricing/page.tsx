export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹5,000',
      period: '/ month',
      description: 'Perfect for small businesses starting their digital journey.',
      features: [
        '4 Social Media Creatives (Posts per month)',
        '2 Reels / Short Videos (Up to 30 sec each)',
        'Story Support (8 Stories per month)',
        'Content Calendar (Monthly Plan)',
        'Basic Page Optimization (Profile, Highlights, Bio)',
        'WhatsApp Support (Priority Support)'
      ],
      recommended: false
    },
    {
      name: 'Growth Plan',
      price: '₹10,000',
      period: '/ month',
      description: 'Built for businesses ready to grow faster and scale.',
      features: [
        '8 Social Media Creatives (Posts per month)',
        '4 Reels / Short Videos (Up to 30 sec each)',
        'Story Support (12 Stories per month)',
        'Ad Campaign Support (2 Campaigns Setup)',
        'Competitor Review (Monthly Analysis)',
        'Monthly Strategy Call (Growth Planning)',
        'Lead-Focused Content (Custom Content Plan)'
      ],
      recommended: true
    },
    {
      name: 'Premium Plan',
      price: '₹15,000+',
      period: '/ month',
      description: 'Full-scale branding, content, and marketing solutions to dominate your market.',
      features: [
        'Full Social Media Management',
        '12 Social Media Creatives',
        '8 Reels / Short Videos',
        'Ad Campaign Optimization',
        'Branding Consultation',
        'Weekly Content Planning',
        'Monthly Performance Review',
        'Priority Support'
      ],
      recommended: false
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Choose the Plan That <span className="gradient-text">Powers Your Growth</span>
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Flexible packages. Real results. Designed for businesses at every stage.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-black/50 border rounded-2xl p-8 ${
                plan.recommended 
                  ? 'border-gold shadow-lg shadow-gold/20 transform md:-translate-y-4' 
                  : 'border-gold/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-black px-6 py-1 rounded-full text-sm font-bold">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gold mb-2">{plan.name}</h3>
                <p className="text-cream/70 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-cream/60 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-cream/80 flex items-start text-sm">
                    <span className="text-gold mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/918600042805" 
                target="_blank"
                className={`block text-center py-3 rounded-full font-semibold transition ${
                  plan.recommended
                    ? 'bg-gold text-black hover:bg-yellow-500'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-black/50 border border-gold/20 rounded-2xl p-8 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Feature Comparison</span>
          </h2>
          
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/20">
                <th className="text-left py-4 px-4 text-gold">Features</th>
                <th className="text-center py-4 px-4 text-gold">Basic</th>
                <th className="text-center py-4 px-4 text-gold">Growth</th>
                <th className="text-center py-4 px-4 text-gold">Premium</th>
              </tr>
            </thead>
            <tbody className="text-cream/80">
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Creatives per Month</td>
                <td className="text-center py-4 px-4">4</td>
                <td className="text-center py-4 px-4">8</td>
                <td className="text-center py-4 px-4">12</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Reels per Month</td>
                <td className="text-center py-4 px-4">2</td>
                <td className="text-center py-4 px-4">4</td>
                <td className="text-center py-4 px-4">8</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Stories per Month</td>
                <td className="text-center py-4 px-4">8</td>
                <td className="text-center py-4 px-4">12</td>
                <td className="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Ad Campaigns Setup</td>
                <td className="text-center py-4 px-4">—</td>
                <td className="text-center py-4 px-4">✓ (2)</td>
                <td className="text-center py-4 px-4">✓ Optimized</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Competitor Review</td>
                <td className="text-center py-4 px-4">—</td>
                <td className="text-center py-4 px-4">✓ Monthly</td>
                <td className="text-center py-4 px-4">✓ Weekly</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="py-4 px-4">Strategy Support</td>
                <td className="text-center py-4 px-4">—</td>
                <td className="text-center py-4 px-4">✓ Monthly Call</td>
                <td className="text-center py-4 px-4">✓ Weekly Planning</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes! You can change your plan anytime based on your business needs.'
              },
              {
                q: 'What platforms do you manage?',
                a: 'We manage Instagram, Facebook, LinkedIn, and other platforms based on your requirements.'
              },
              {
                q: 'Do you offer custom packages?',
                a: 'Absolutely! Contact us to discuss a package tailored to your specific needs.'
              },
              {
                q: 'How do I get started?',
                a: 'Simply click "Get Started" on any plan or WhatsApp us at 8600042805.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 border border-gold/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gold mb-2">{faq.q}</h3>
                <p className="text-cream/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
            Let&apos;s find the perfect fit for your business. Contact us for a free consultation.
          </p>
          <a 
            href="https://wa.me/918600042805" 
            target="_blank"
            className="inline-block bg-gold text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-500 transition text-lg"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}