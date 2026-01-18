import React from 'react';
import Title from './Title.jsx';
import { categories } from '../assets/data.js';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-100 py-12 sm:py-14">
      {/* Section Title */}
      <Title
        title1="Categories"
        title2=" List"
        titleStyle="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center"
        paraStyle="text-gray-600 mb-12 text-center max-w-xl mx-auto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal scroll container on mobile */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-none sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 sm:space-x-0 py-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/dresscollection/${category.name.toLowerCase()}`)}
            >
              {/* Image Card */}
              <div className="w-64 h-75 bg-white  shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 sm:h-48 md:h-44 object-cover"
                />
              </div>

              {/* Name below the card */}
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-center text-gray-900">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
