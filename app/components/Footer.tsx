import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gold text-2xl font-bold mb-4">THE DUOS MEDIA</h3>
            <p className="text-cream/70 mb-4">
              Your Brand Making Partner. We build relationships that create long-term success.
            </p>
            <p className="text-sm text-cream/50">
              © 2024 The Duos Media. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-cream/70 hover:text-gold transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-cream/70 hover:text-gold transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/70 hover:text-gold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-cream/70">
              <li>
                <a href="tel:8600042805" className="hover:text-gold transition">
                  📞 8600042805
                </a>
              </li>
              <li>
                <a href="mailto:theduosmedia@gmail.com" className="hover:text-gold transition">
                  ✉️ theduosmedia@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/the_duos_media" 
                  target="_blank"
                  className="hover:text-gold transition"
                >
                  📱 @the_duos_media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}