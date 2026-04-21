'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          
          <Image
            src="/images/logo.jpg"
            alt="The Duos Media Logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />

          <span className="text-sm md:text-base font-medium tracking-wide">
            THE DUOS MEDIA
          </span>

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 text-gray-300 bg-black/90">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}

    </header>
  );
}