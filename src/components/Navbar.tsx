"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Tours", href: "/tours" },
  { name: "Hotels", href: "/hotels" },
  { name: "Experiences", href: "/experiences" },
  { name: "Offers", href: "/offers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("jetwingCurrentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jetwingCurrentUser");
    setUser(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <img 
              src="https://jetwingtravels.com/wp-content/uploads/2023/03/main-logo.png" 
              alt="Jetwing Travels" 
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link href="/admin/dashboard" className="text-sm text-gold font-medium">
                  Welcome, {user.name}
                </Link>
                <button onClick={handleLogout} className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="px-4 py-2 text-sm text-primary font-medium hover:bg-gray-100 rounded">
                  Login
                </Link>
                <Link href="/auth/signup" className="px-4 py-2 text-sm bg-gold text-white font-medium rounded hover:bg-yellow-600">
                  Sign Up
                </Link>
              </>
            )}
            <a href="tel:+94777265746" className="btn-primary text-sm ml-2">
              📞 +94 77 726 5746
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-3">
              <Link href="/auth/login" className="flex-1 px-4 py-2 text-center text-sm border border-gray-300 rounded">
                Login
              </Link>
              <Link href="/auth/signup" className="flex-1 px-4 py-2 text-center text-sm bg-gold text-white rounded">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
