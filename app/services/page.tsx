'use client';

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <main className="px-6 pt-24">

      {/* HERO */}
      <section className="h-screen flex items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold max-w-4xl"
        >
          We don’t offer services. <br />
          <span className="text-yellow-400">We build growth systems.</span>
        </motion.h1>
      </section>

      {/* SERVICES FLOW */}
      <section className="space-y-32 pb-32">

        {[
  {
    title: "Branding",
    desc: "We craft a strong brand identity that makes your business instantly recognizable and trustworthy."
  },
  {
    title: "Social Media",
    desc: "We build your presence, grow engagement, and turn followers into customers."
  },
  {
    title: "Content Creation",
    desc: "We create scroll-stopping visuals and videos that capture attention instantly."
  },
  {
    title: "Paid Ads",
    desc: "We run high-performing campaigns focused on leads, sales, and ROI."
  },
  {
    title: "Growth Strategy",
    desc: "We design a clear roadmap to scale your business faster and smarter."
  }
].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {item.title}
            <p className="text-lg text-yellow-400 mt-4 max-w-xl font-normal">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

    </main>
  );
}