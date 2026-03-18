import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Layout Component - Royal Luxury Aesthetic
 * Clean, elegant navigation with deep navy and gold accents
 */

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none font-serif">
                THE COURTYARD
              </span>
              <span className="text-xs text-primary/60 font-semibold tracking-widest">
                ON DAUPHIN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/venue", label: "The Venue" },
              { href: "/weddings", label: "Weddings" },
              { href: "/parties", label: "Parties & Events" },
              { href: "/corporate", label: "Corporate" },
              { href: "/gallery", label: "Gallery" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:251-333-7368"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 font-medium text-sm transition-all duration-300"
            >
              <Phone size={16} />
              <span>251-333-RENT</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="container py-4 flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/venue", label: "The Venue" },
                { href: "/weddings", label: "Weddings" },
                { href: "/parties", label: "Parties & Events" },
                { href: "/corporate", label: "Corporate" },
                { href: "/gallery", label: "Gallery" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2 duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:251-333-7368"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm mt-2"
              >
                <Phone size={16} />
                <span>251-333-RENT</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-lg font-bold leading-none font-serif">
                  THE COURTYARD
                </span>
                <span className="text-xs tracking-widest opacity-75">
                  ON DAUPHIN
                </span>
              </div>
              <p className="text-sm opacity-75">
                A sophisticated boutique event venue in historic downtown Mobile, Alabama.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base mb-4 font-serif">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/", label: "Home" },
                  { href: "/venue", label: "The Venue" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="opacity-75 hover:opacity-100 transition-opacity duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Types */}
            <div>
              <h4 className="font-bold text-base mb-4 font-serif">Event Types</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/weddings", label: "Weddings" },
                  { href: "/parties", label: "Parties & Personal Events" },
                  { href: "/corporate", label: "Corporate Events" },
                  { href: "/pricing", label: "Pricing" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="opacity-75 hover:opacity-100 transition-opacity duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base mb-4 font-serif">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:251-333-7368"
                    className="opacity-75 hover:opacity-100 transition-opacity flex items-center gap-2 duration-300"
                  >
                    <Phone size={16} />
                    251-333-RENT
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rentyellowhammer.com"
                    className="opacity-75 hover:opacity-100 transition-opacity duration-300"
                  >
                    info@rentyellowhammer.com
                  </a>
                </li>
                <li className="opacity-75">
                  751 Dauphin Street
                  <br />
                  Mobile, AL 36602
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-center opacity-75">
              © {new Date().getFullYear()} The Courtyard on Dauphin. All rights
              reserved. | Part of Yellowhammer Hospitality
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <Link href="/contact" className="flex items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Phone size={24} />
        </Link>
      </div>
    </div>
  );
}
