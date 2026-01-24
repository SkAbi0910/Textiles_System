import React from 'react';
import Title from './Title.jsx';
import { categories } from '../assets/data.js';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-100 py-12 sm:py-16">

      <Title
        title1="Categories"
        title2=" List"
        titleStyle="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center"
        paraStyle="text-gray-600 mb-12 text-center max-w-xl mx-auto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex gap-6 overflow-x-auto scrollbar-none sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 pb-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                navigate(
                  `/dresscollection/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
              className="group min-w-[260px] cursor-pointer"
            >

              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">

                <div className="overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>


                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-500 transition">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Categories;
