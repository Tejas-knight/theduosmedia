'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight">
            Brands Don’t Grow by Chance <br />
            <span className="text-yellow-400">They Grow by Strategy</span>
          </h1>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            We turn attention into revenue through strategy, content and growth systems.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120 }}
              href="https://wa.me/918600042805"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition"
            >
              Start Project
            </motion.a>

            <a
              href="/pricing"
              className="border border-white/30 px-8 py-3 rounded-full hover:border-white transition"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16">
          <span className="text-white">What We</span>{" "}
          <span className="text-yellow-400">Do</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "Branding",
              desc: "We craft a powerful identity that builds trust and recognition."
            },
            {
              title: "Social Media",
              desc: "We grow your audience and turn engagement into leads."
            },
            {
              title: "Content Creation",
              desc: "We create scroll-stopping reels and visuals."
            },
            {
              title: "Paid Advertising",
              desc: "We run campaigns focused on ROI, not vanity metrics."
            },
            {
              title: "Growth Strategy",
              desc: "We design a roadmap to scale your business faster."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="border border-gray-800/60 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl hover:border-yellow-400/80 hover:bg-white/[0.04] transition duration-300"
            >
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-yellow-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-center">
          <span className="text-white">Pricing</span>{" "}
          <span className="text-yellow-400">Plans</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* BASIC */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="border border-gray-800/60 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl hover:border-yellow-400/80 hover:bg-white/[0.04] transition duration-300"
          >
            <h3 className="text-2xl font-medium">Basic</h3>
            <p className="text-yellow-400 text-4xl mt-4">₹5,000</p>
            <p className="text-gray-300 mt-2">For small businesses getting started</p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ 4 Creatives</li>
              <li>✔ 2 Reels</li>
              <li>✔ 8 Stories</li>
              <li>✔ Content Calendar</li>
              <li>✔ Basic Strategy</li>
            </ul>
          </motion.div>

          {/* GROWTH */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="border border-yellow-400/80 bg-yellow-400/10 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-yellow-400/10"
          >
            <h3 className="text-2xl font-medium">Growth</h3>
            <p className="text-yellow-400 text-4xl mt-4">₹10,000</p>
            <p className="text-gray-200 mt-2">Most popular for growing brands</p>

            <ul className="mt-6 space-y-3 text-gray-200">
              <li>✔ 8 Creatives</li>
              <li>✔ 4 Reels</li>
              <li>✔ 12 Stories</li>
              <li>✔ Ad Campaign Support</li>
              <li>✔ Growth Strategy</li>
            </ul>
          </motion.div>

          {/* PREMIUM */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="border border-gray-800/60 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl hover:border-yellow-400/80 hover:bg-white/[0.04] transition duration-300"
          >
            <h3 className="text-2xl font-medium">Premium</h3>
            <p className="text-yellow-400 text-4xl mt-4">₹15,000+</p>
            <p className="text-gray-300 mt-2">Complete business growth system</p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Full Social Media Management</li>
              <li>✔ 8+ Reels</li>
              <li>✔ Ad Optimization</li>
              <li>✔ Monthly Strategy Calls</li>
              <li>✔ Dedicated Support</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16">
          <span className="text-white">Client</span>{" "}
          <span className="text-yellow-400">Results</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Footfall increased massively – Café Aroma",
            "Instagram grew from 0 to 10K – FitZone",
            "Better leads – SkinCare Clinic",
            "Consistent growth – Modern Mart"
          ].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="border border-gray-800/60 bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl hover:border-yellow-400/80"
            >
              <p className="text-lg italic text-gray-300 leading-relaxed">“{text}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-medium max-w-xl tracking-tight">
          Let’s Build Something That Stands Out
        </h2>

        <div className="mt-8 flex gap-6">
          <a
            href="https://wa.me/918600042805"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition"
          >
            WhatsApp
          </a>

          <a
            href="/contact"
            className="border border-white/30 px-8 py-3 rounded-full hover:border-white transition"
          >
            Contact
          </a>
        </div>
      </section>

    </main>
  );
}