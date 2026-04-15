'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto">

      <section className="py-32">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16">
          <span className="text-white">Choose Your</span>{" "}
          <span className="text-yellow-400">Growth Plan</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "Basic",
              price: "₹5,000",
              desc: "Ideal for businesses starting their digital journey.",
              features: [
                "4 Social Media Creatives",
                "2 Reels",
                "8 Stories",
                "Content Calendar",
                "Basic Strategy"
              ]
            },
            {
              name: "Growth",
              price: "₹10,000",
              desc: "For brands ready to scale and grow faster.",
              features: [
                "8 Creatives",
                "4 Reels",
                "12 Stories",
                "Ad Campaign Support",
                "Growth Strategy"
              ]
            },
            {
              name: "Premium",
              price: "₹15,000+",
              desc: "Complete system for serious business growth.",
              features: [
                "Full Social Media Management",
                "8+ Reels",
                "Ad Optimization",
                "Monthly Strategy",
                "Dedicated Support"
              ]
            }
          ].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-800 p-10 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="text-yellow-400 text-4xl mt-4">{plan.price}</p>
              <p className="text-gray-400 mt-3">{plan.desc}</p>

              <ul className="mt-6 space-y-3 text-gray-300">
                {plan.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/918600042805"
                className="block mt-8 text-center bg-yellow-400 text-black py-3 rounded-full font-semibold"
              >
                Get Started
              </a>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}