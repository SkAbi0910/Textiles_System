import React from 'react';
import Title from './Title';
import { blogs } from '../assets/data.js';

const Blog = () => {
  return (
    <section className="bg-slate-100 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:px-8 mb-16">
      {/* Section Title */}
      <Title
        text="Stay updated with the latest fashion trends, tips, and news from our expert bloggers."
        title1="From Our"
        title2=" Blog"
        titleStyle="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center"
        paraStyle="text-gray-600 mb-5 text-center max-w-2xl mx-auto"
      />

      {/* Horizontal Scrollable Blog Cards */}
      <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-none">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex-shrink-0 w-64 flex flex-col items-center cursor-pointer"
          >
            {/* Image Card */}
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Blog Title */}
            <h3 className="mt-3 text-lg sm:text-xl font-semibold text-center text-gray-900">
              {blog.title}
            </h3>

            {/* Excerpt / Read More */}
            <p className="mt-1 text-gray-600 text-center">{blog.excerpt}</p>
            <button className="mt-2 text-blue-600 font-bold">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
