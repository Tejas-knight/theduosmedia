'use client';

import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto">

      <section className="py-24">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
          What We Help Brands <span className="text-yellow-400">Build</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl">
          We work with businesses to build clarity, visibility, and consistent digital presence through strategy, content, and execution.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 pb-24">

        {[
          {
            title: "Branding & Identity",
            desc: "We create visual and communication foundations that help businesses present themselves with clarity and confidence."
          },
          {
            title: "Performance Marketing",
            desc: "Campaigns designed to generate visibility, inquiries, and measurable digital growth."
          },
          {
            title: "Content Production",
            desc: "Content built for attention, storytelling, and recall across platforms."
          },
          {
            title: "Digital Presence",
            desc: "Website thinking, SEO direction, and brand consistency across digital platforms."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="border border-gray-800/60 bg-white/[0.02] p-8 rounded-2xl"
          >
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="mt-4 text-yellow-400">{item.desc}</p>
          </motion.div>
        ))}

      </section>

    </main>
  );
}