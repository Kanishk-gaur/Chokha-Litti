import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Chokha Litti</h3>
            <p className="text-amber-100">
              Preserving the authentic taste of Bihari cuisine since 2010. Our
              traditional recipes bring you the rustic flavors of rural India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-amber-100 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-amber-100 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-amber-100 hover:text-white transition"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Budha Vihar ,Munirika,New Delhi, Delhi 110067</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+91 9097272726</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>contact@chokhalitti.in</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl text-amber-100 hover:text-white transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-amber-100 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl text-amber-100 hover:text-white transition"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Newsletter */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-700 mt-8 pt-6 text-center text-amber-100">
          <p>
            &copy; {new Date().getFullYear()} Chokha Litti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
