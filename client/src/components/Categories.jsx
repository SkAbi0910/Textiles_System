import React from 'react'
import Title from './Title.jsx'
import { categories } from '../assets/data.js'
import { useNavigate } from 'react-router-dom'

const Categories = () => {

  const navigate = useNavigate();

  return (
    <section className=" max-padd-container bg-white py-20">
      <Title text="Shop by Categories" title1 ={"Categories"} title2={" List"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"}

       />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Shop by Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div onClick={() => navigate(`/dresscollection/${category.name.toLocaleLowerCase()}`)} key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover" /> 
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                {/* <p className="text-gray-600 mb-4">{category.description}</p> */}
                {/* <span className="text-blue-600 font-bold">Explore {category.name}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
