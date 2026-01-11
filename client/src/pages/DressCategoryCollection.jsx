import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Casual Wear",
  "Party Wear",
  "Formal Wear",
  "Traditional",
  "Summer",
];

const sampleProducts = Array.from({ length: 8 });

const DressCategoryCollection = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50">
      
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Dress <span className="text-tertiary">Categories</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our beautifully curated dress collections designed for every
          style, season, and special moment.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-5 py-2 rounded-full text-sm font-medium border border-gray-300
            hover:bg-tertiary hover:text-white hover:border-tertiary transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sampleProducts.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Dress"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
              />
              <span className="absolute top-4 left-4 bg-tertiary text-white text-xs px-3 py-1 rounded-full">
                New
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Elegant Dress
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Perfect for parties & occasions
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ₹3,999
                </span>
                <Link
                  to="/dressdetails"
                  className="text-sm font-medium text-tertiary hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DressCategoryCollection;
