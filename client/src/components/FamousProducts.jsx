import React from "react";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../services/productsApi";

const FamousProducts = () => {
  const navigate = useNavigate();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsQuery();

  const famousProducts = products.filter(
    (product) => product.isFamous === true
  );

  if (isLoading) {
    return (
      <section className="py-10 text-center text-gray-600">
        Loading famous products...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-10 text-center text-red-500">
        Failed to load products
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-5 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <Title
          title1="Famous"
          title2=" Products"
          titleStyle="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center"
          paraStyle="text-gray-600 mb-12 text-center max-w-xl mx-auto"
          text="Discover our most popular and highly rated dresses that customers love."
        />


        <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-none">
          {famousProducts.map((product) => (
            <div
              key={product._id}
              className="flex-shrink-0 w-64 flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/product/${product._id}`)}
            >

              <div className="w-full h-70 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={product.image?.[0] || product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>


              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-center text-gray-900">
                {product.name}
              </h3>


              <span className="mt-1 text-blue-600 font-bold">
                ${product.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FamousProducts;
