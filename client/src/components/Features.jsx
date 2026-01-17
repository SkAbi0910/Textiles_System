import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { MdCurrencyExchange } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { TbPackageImport } from 'react-icons/tb'

const Features = () => {
  const features = [
    {
      icon: <TbPackageImport className="text-4xl text-blue-600" />,
      title: "Quality Products",
      desc: "We offer only the best quality textiles sourced from trusted manufacturers."
    },
    {
      icon: <LiaShippingFastSolid className="text-4xl text-blue-600" />,
      title: "Fast Shipping",
      desc: "Enjoy quick and reliable delivery on all your orders."
    },
    {
      icon: <MdCurrencyExchange className="text-4xl text-blue-600" />,
      title: "Easy Returns",
      desc: "Hassle-free returns and exchanges for a smooth shopping experience."
    },
    {
      icon: <BiSupport className="text-4xl text-blue-600" />,
      title: "24/7 Support",
      desc: "Our customer support team is available anytime you need help."
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
