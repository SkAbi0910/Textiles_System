import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'

const DressCollection = () => {

  const { products, searchQuery } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    } else {
      setFilteredProducts(products);
    }

    setCurrentPage(1);
  }, [products, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.filter(product => product.inStock).length / productsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <div className='bg-white min-h-screen'>
      <Title text="Dress Collection" title1={"Dress"} title2={" Collection"} titleStyle={"text-4xl font-extrabold text-gray-900 mb-10 text-center mt-20"} paraStyle={"text-gray-600 mb-16 text-center"} />
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.filter((product) => product.inStock).slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product) => (
              <Item key={product._id} product={product} />
            ))
          ) : (
            <h4 className='text-red-400 text-xl text-center '>Oops! Nothing Matched with your Search </h4>
          )}
        </div>
        <div className='flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md'>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""} px-4 py-2 rounded-lg transition`}>Previous</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`${currentPage === index + 1 && "bg-black text-white"}  w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300`} >{index + 1}</button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className={`${currentPage === totalPages && "opacity-50 cursor-not-allowed"} px-4 py-2 rounded-lg transition`}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default DressCollection
