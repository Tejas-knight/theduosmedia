'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/logo.jpg"
            alt="The Duos Media Logo"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-sm md:text-base font-medium tracking-wide text-white">
            THE DUOS MEDIA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/services" className="transition hover:text-white">Services</Link>
          <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={[
          "md:hidden overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-6 py-4 text-gray-300">
          <Link href="/" onClick={closeMenu} className="py-3 transition hover:text-white">
            Home
          </Link>
          <Link href="/services" onClick={closeMenu} className="py-3 transition hover:text-white">
            Services
          </Link>
          <Link href="/pricing" onClick={closeMenu} className="py-3 transition hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" onClick={closeMenu} className="py-3 transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}