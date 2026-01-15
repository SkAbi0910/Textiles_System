import React from 'react'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {MdCurrencyExchange} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {TbPackageImport} from 'react-icons/tb'
const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/assets/dress1 (1).jpg" alt="Quality Products" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-600">We offer only the best quality textiles sourced from trusted manufacturers.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <img src="/assets/shipping-icon.png" alt="Fast Shipping" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3> 
            <p className="text-gray-600">Enjoy quick and reliable delivery on all your orders, right to your doorstep.</p>
          </div>
          <LiaShippingFastSolid className="w-16 h-16 mb-4 text-blue-600" />
          <MdCurrencyExchange className="w-16 h-16 mb-4 text-blue-600" />
          <BiSupport      className="w-16 h-16 mb-4 text-blue-600" /> 
          <TbPackageImport className="w-16 h-16 mb-4 text-blue-600" />
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">

            <img src="/assets/support-icon.png" alt="24/7 Support" className="w-16 h-16 mb-4" />  
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer support team is here to assist you anytime, anywhere.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features
