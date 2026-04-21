'use client';

import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <main className="pt-24 px-6 max-w-4xl mx-auto text-center">

      <section className="py-24">
        <h1 className="text-4xl md:text-6xl font-medium">
          Start The <span className="text-yellow-400">Conversation</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Tell us what you are building, and we’ll explore how we can help shape it better.
        </p>

        <div className="mt-10 space-y-4 text-lg text-gray-300">
          <p>📩 {CONTACT.email}</p>
          <p>📞 {CONTACT.phone}</p>
        </div>

        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full"
        >
          Connect on WhatsApp
        </a>

      </section>

    </main>
  );
}