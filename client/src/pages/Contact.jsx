import React from 'react'
import Title from '../components/Title'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="bg-slate-100 py-20">
      <Title
        text="We’d Love to Hear From You"
        title1="Get in"
        title2=" Touch"
        titleStyle="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center pt-20"
        paraStyle="text-gray-600 mb-16 text-center max-w-2xl mx-auto"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

        <div className="space-y-6">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Phone",
              value: "+94 77 123 4567",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "example@gmail.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              value: "Kalmunai, Sri Lanka",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4
                     transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-amber-400/20
                          flex items-center justify-center text-amber-500 text-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-full border border-gray-300
                       focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border border-gray-300
                       focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-300
                       focus:ring-2 focus:ring-amber-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-amber-500 text-white
                     font-semibold hover:bg-amber-600 transition transform hover:scale-105"
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
