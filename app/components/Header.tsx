'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect border-b border-gold/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/logo.jpg" 
                alt="The Duos Media" 
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gold hidden sm:block group-hover:text-yellow-400 transition-colors">
              THE DUOS MEDIA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-cream hover:text-gold transition-colors duration-300">
              Home
            </Link>
            <Link href="/services" className="text-cream hover:text-gold transition-colors duration-300">
              Services
            </Link>
            <Link href="/pricing" className="text-cream hover:text-gold transition-colors duration-300">
              Pricing
            </Link>
            <Link href="/contact" className="text-cream hover:text-gold transition-colors duration-300">
              Contact
            </Link>
            <a 
              href="https://wa.me/918600042805" 
              target="_blank"
              className="bg-gold text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-400 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold hover:text-yellow-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link href="/" className="block text-cream hover:text-gold transition-colors py-2">
              Home
            </Link>
            <Link href="/services" className="block text-cream hover:text-gold transition-colors py-2">
              Services
            </Link>
            <Link href="/pricing" className="block text-cream hover:text-gold transition-colors py-2">
              Pricing
            </Link>
            <Link href="/contact" className="block text-cream hover:text-gold transition-colors py-2">
              Contact
            </Link>
            <a 
              href="https://wa.me/918600042805" 
              target="_blank"
              className="block bg-gold text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-yellow-400 transition-all"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}