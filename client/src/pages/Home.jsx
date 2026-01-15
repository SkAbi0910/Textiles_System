import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import FamousProducts from '../components/FamousProducts'
import Blog from '../components/Blog'
import bannerImg from '../assets/banner.jpg'


const Home = () => {
  return (
    <>
    <Hero/>
    <Categories/>
    <Features/>
    <FamousProducts/>
    <div className='max-w-7xl mx-auto px-6'>
      <img src={bannerImg} alt="Banner" className="w-full h-auto mt-10 mb-10"/>
    </div>
    <Blog/>
    </>
  )
}

export default Home
