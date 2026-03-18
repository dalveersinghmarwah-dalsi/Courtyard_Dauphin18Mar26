import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">
                THE COURTYARD
              </span>
              <span className="text-xs text-secondary font-semibold tracking-widest">
                ON DAUPHIN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/venue" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              The Venue
            </Link>
            <Link href="/weddings" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Weddings
            </Link>
            <Link href="/parties" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Parties & Events
            </Link>
            <Link href="/corporate" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Corporate
            </Link>
            <Link href="/gallery" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Gallery
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:251-333-7368"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
            >
              <Phone size={16} />
              <span>251-333-RENT</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/venue"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                The Venue
              </Link>
              <Link
                href="/weddings"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Weddings
              </Link>
              <Link
                href="/parties"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Parties & Events
              </Link>
              <Link
                href="/corporate"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Corporate
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:251-333-7368"
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm mt-2"
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
                <span className="text-lg font-bold leading-none">
                  THE COURTYARD
                </span>
                <span className="text-xs tracking-widest opacity-75">
                  ON DAUPHIN
                </span>
              </div>
              <p className="text-sm opacity-75">
                A boutique event venue in historic downtown Mobile, Alabama.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="opacity-75 hover:opacity-100 transition-opacity">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/venue" className="opacity-75 hover:opacity-100 transition-opacity">
                    The Venue
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="opacity-75 hover:opacity-100 transition-opacity">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="opacity-75 hover:opacity-100 transition-opacity">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Event Types */}
            <div>
              <h4 className="font-bold text-base mb-4">Event Types</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/weddings" className="opacity-75 hover:opacity-100 transition-opacity">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="/parties" className="opacity-75 hover:opacity-100 transition-opacity">
                    Parties & Personal Events
                  </Link>
                </li>
                <li>
                  <Link href="/corporate" className="opacity-75 hover:opacity-100 transition-opacity">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="opacity-75 hover:opacity-100 transition-opacity">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-base mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:251-333-7368"
                    className="opacity-75 hover:opacity-100 transition-opacity flex items-center gap-2"
                  >
                    <Phone size={16} />
                    251-333-RENT
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rentyellowhammer.com"
                    className="opacity-75 hover:opacity-100 transition-opacity"
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
      <div className="fixed bottom-6 right-6 md:hidden">
        <Link href="/contact" className="flex items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Phone size={24} />
        </Link>
      </div>
    </div>
  );
}
