import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
       <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover Your <span className="text-blue-600">Perfect Style</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore the latest fashion trends in textiles.  
            Premium quality dresses at affordable prices.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to="/dresscollection" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Shop Now
            </Link>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
              View Collection
            </button>
          </div>
        </div>

        <div>
          <img src="/assets/hero-image.png" alt="Fashion Showcase" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default Hero
