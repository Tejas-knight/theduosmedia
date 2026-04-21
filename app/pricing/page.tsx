'use client';

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/918668895845";

/* ✅ SAFE VARIANTS (NO TS ERRORS) */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
    },
  },
};

export default function PricingPage() {
  const plans = [
    {
      name: "Basic Plan",
      price: "₹5,000 / month",
      highlight: "Great for building a strong online presence.",
      features: [
        "4 Social Media Creatives",
        "2 Reels / Short Videos (up to 30 sec each)",
        "Story Support (8 stories per month)",
        "Content Calendar (Monthly Plan)",
        "Basic Page Optimization (Profile, Highlights, Bio)",
        "WhatsApp Support (Priority Support)",
      ],
    },
    {
      name: "Growth Plan",
      price: "₹10,000 / month",
      highlight: "Built for businesses ready to grow faster and scale.",
      features: [
        "8 Social Media Creatives",
        "4 Reels / Short Videos",
        "Story Support (12 stories per month)",
        "Ad Campaign Support (2 campaigns setup)",
        "Competitor Review (Monthly Analysis)",
        "Monthly Strategy Call (Growth Planning)",
        "Lead-Focused Content (Custom content plan)",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹15,000+ / month",
      highlight: "Full-scale branding, content, and marketing support.",
      features: [
        "Full Social Media Management",
        "12 Social Media Creatives",
        "8 Reels / Short Videos",
        "Ad Campaign Optimization",
        "Branding Consultation",
        "Weekly Content Planning",
        "Monthly Performance Review",
        "Priority Support",
      ],
    },
  ];

  return (
    <main className="pt-32 px-6 text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-medium leading-tight"
        >
          Pricing That Matches Your{" "}
          <span className="text-yellow-400">Growth Stage</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-gray-300"
        >
          Flexible plans designed for businesses at different stages — from building presence
          to scaling growth.
        </motion.p>
      </section>

      {/* PLANS */}
      <section className="mt-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan, i) => {
          const isPopular = plan.name === "Growth Plan";

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true }}
              className={`relative rounded-[28px] p-8 border 
              ${isPopular
                ? "border-yellow-400 bg-yellow-400/10 shadow-yellow-400/20 shadow-xl"
                : "border-white/10 bg-white/[0.02]"}
              `}
            >

              {/* MOST POPULAR TAG */}
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 
                bg-yellow-400 text-black px-4 py-1 text-xs rounded-full font-medium">
                  Most Popular
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-medium">{plan.name}</h3>

              {/* PRICE */}
              <p className="mt-3 text-3xl text-yellow-400 font-semibold">
                {plan.price}
              </p>

              {/* HIGHLIGHT */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {plan.highlight}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="text-yellow-400 w-4 h-4 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                className={`mt-8 block text-center px-6 py-3 rounded-full transition
                ${isPopular
                  ? "bg-yellow-400 text-black hover:scale-105"
                  : "border border-white/20 hover:bg-white/10"}
                `}
              >
                Get Started
              </a>

            </motion.div>
          );
        })}

      </section>

      {/* BOTTOM CTA */}
      <section className="mt-28 text-center">
        <h2 className="text-3xl md:text-4xl font-medium">
          Not Sure Which Plan Fits?
        </h2>

        <p className="mt-4 text-gray-400">
          Let’s discuss your goals and suggest what works best for your business.
        </p>

        <a
          href={WHATSAPP_LINK}
          className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Talk To Us →
        </a>
      </section>

    </main>
  );
}