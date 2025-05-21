"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#A0522D] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold font-serif">
          Chokha Litti
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-amber-200 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-3 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-amber-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
