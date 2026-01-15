import React from 'react'
import Title from './Title'
import { blogs } from '../assets/data.js'

const Blog = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 mb-16'>
    <Title text="Stay updated with the latest fashion trends, tips, and news from our expert bloggers." title1 ={"From Our"} title2={" Blog"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
 {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />      
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>
            <button className="text-blue-600 font-bold">Read More</button>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Blog
