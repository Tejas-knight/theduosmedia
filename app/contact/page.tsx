'use client';

export default function Contact() {
  return (
    <main className="px-6 pt-24">

      <section className="h-screen flex flex-col justify-center items-start max-w-4xl">

        <h1 className="text-5xl md:text-7xl font-bold">
          Let’s talk.
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Tell us about your brand. We’ll help you grow it.
        </p>

        <div className="mt-10 space-y-4 text-lg">
          <a href="tel:8600042805" className="block hover:text-yellow-400">
            +91 8600042805
          </a>

          <a href="mailto:theduosmedia@gmail.com" className="block hover:text-yellow-400">
            services@theduosmedia.in
          </a>

          <a href="https://instagram.com/the_duos_media" target="_blank" className="block hover:text-yellow-400">
            @the_duos_media
          </a>

          <a href="https://wa.me/918600042805" className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
            Chat on WhatsApp
          </a>
        </div>

      </section>

    </main>
  );
}