import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaTshirt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
            <FaTshirt />
            <span>Textiles Shop</span>
          </div>
          <p className="text-gray-400 text-sm">
            Premium quality dresses and textiles crafted with elegance and comfort.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/dresscollection" className="hover:text-white">Collection</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Sarees</li>
            <li>Kurtis</li>
            <li>Lehengas</li>
            <li>Casual Wear</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400"><FaMapMarkerAlt /> Kalmunai, Sri Lanka</p>
          <p className="text-sm text-gray-400"><FaPhoneAlt /> +94 77 123 4567</p>
          <p className="text-sm text-gray-400"><FaEnvelope /> support@textilesshop.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Textiles Shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
