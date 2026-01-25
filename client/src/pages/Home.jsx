import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import FamousProducts from '../components/FamousProducts'
import MemberShip from '../components/MemberShip'


const Home = () => {
  return (
    <>
    <Hero/>
    <Categories/>
    
    <MemberShip/>
    <Features/>
    <FamousProducts/>
    </>
  )
}

export default Home
