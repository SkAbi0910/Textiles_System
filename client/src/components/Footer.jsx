import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTshirt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaInstagram />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaWhatsapp />, url: "#" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/dresscollection" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const categories = ["Sarees", "Kurtis", "Lehengas", "Casual Wear"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">


        <div>
          <div className="flex items-center gap-2 text-2xl font-extrabold text-white mb-4">
            <FaTshirt className="text-amber-400" />
            <span>Textiles Shop</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Premium quality dresses and textiles crafted with elegance, comfort,
            and timeless style.
          </p>

          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                aria-label="social-link"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10
                       hover:bg-amber-400 hover:text-black transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-amber-400 transition flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-sm">
            {categories.map((category) => (
              <li
                key={category}
                className="hover:text-amber-400 cursor-pointer transition"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-amber-400" />
              Kalmunai, Sri Lanka
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              +94 77 123 4567
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              support@textilesshop.com
            </p>
          </div>
        </div>
      </div>


      <div className="border-t border-white/10 mt-12 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-medium">Textiles Shop</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
