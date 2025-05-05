import Link from "next/link";
import { navLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold font-serif">
          Chokha Litti
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button (will add functionality later) */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
}