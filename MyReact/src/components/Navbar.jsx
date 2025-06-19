import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white  fixed w-full z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-emerald-900 text-2xl font-bold tracking-wide">
              Ephraim Gardens
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-emerald-700 hover:text-emerald-900 hover:border-b-2 hover:border-amber-400 pb-1 transition duration-300 ease-in-out font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+254726222222"
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-700 hover:text-emerald-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white"> {/* Added bg-white here for consistency */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+254726222222"
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md text-base font-semibold mt-2 mx-3 text-center transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;