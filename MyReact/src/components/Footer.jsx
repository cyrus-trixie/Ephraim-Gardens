import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12 relative overflow-hidden">
      {/* Floating dots for vibes */}
      <div className="absolute top-10 left-12 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-20 w-4 h-4 bg-emerald-500 rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Ephraim Gardens
            <span className="block text-amber-200 font-light text-sm mt-1">
              & Recreation Resort
            </span>
          </h2>
          <p className="text-gray-300">
            Escape the noise. Embrace nature. Where memories are made and moments last forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/gallery" className="hover:text-amber-400 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-amber-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-amber-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-amber-400" /> +254726222222
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-amber-400" /> ephraim.resort@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-400" /> Muthiga, Rungiri, Nairobi, Kenya
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/ephraimresort/" className="p-2 rounded-full bg-white/10 hover:bg-amber-400 transition">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ephraim Gardens & Recreation Resort. All rights reserved.
      </div>
    </footer>
  );
}
