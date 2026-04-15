'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 py-4">

          {/* LOGO */}
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

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-4 h-[2px] bg-white"></span>
          </button>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center gap-8"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          {/* MENU ITEMS */}
          <Link onClick={() => setOpen(false)} href="/services" className="text-3xl font-medium">
            Services
          </Link>

          <Link onClick={() => setOpen(false)} href="/pricing" className="text-3xl font-medium">
            Pricing
          </Link>

          <Link onClick={() => setOpen(false)} href="/contact" className="text-3xl font-medium">
            Contact
          </Link>

          <a
            href="https://wa.me/918600042805"
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full"
          >
            Let’s Talk
          </a>
        </motion.div>
      )}
    </>
  );
}