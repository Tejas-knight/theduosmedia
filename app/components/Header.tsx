'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-semibold">THE DUOS MEDIA</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>

          <a
            href="https://wa.me/918600042805"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
}