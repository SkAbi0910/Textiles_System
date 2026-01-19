import React from 'react'
import Title from '../components/Title'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Title
        text="We’d Love to Hear From You"
        title1={"Get in"}
        title2={" Touch"}
        titleStyle="text-4xl font-extrabold text-gray-900 mb-6 text-center mt-20"
        paraStyle="text-gray-600 mb-16 text-center max-w-2xl mx-auto"
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600 text-sm">+94 77 123 4567</p>

            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600 text-sm">example@gmail.com</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600 text-sm">Kalmunai, Sri Lanka</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md"></div>
          <form className="space-y-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <textarea rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none">
            </textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
