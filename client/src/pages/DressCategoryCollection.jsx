import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchProducts } from "../api/productApi";
import Title from "../components/Title";
import Item from "../components/Item";

const DressCategoryCollection = () => {
  const { category } = useParams();
  const searchQuery = useSelector((state) => state.search.query);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;


  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });


  const filteredProducts = useMemo(() => {
    let result = products;

    if (category) {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchQuery?.length > 0) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result.filter((product) => product.inStock);
  }, [products, category, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (isLoading)
    return (
      <div className="p-6 text-center text-gray-500">Loading products...</div>
    );

  if (isError)
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load products.
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      <Title
        text="Dress Collection"
        title1={`${category}`}
        title2={" Collection"}
        titleStyle="text-4xl font-extrabold text-gray-900 capitalize mb-10 text-center mt-20"
        paraStyle="text-gray-600 mb-16 text-center"
      />

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts
              .slice(
                (currentPage - 1) * productsPerPage,
                currentPage * productsPerPage
              )
              .map((product) => <Item key={product._id} product={product} />)
          ) : (
            <h4 className="text-red-400 text-xl text-center">
              Oops! Nothing matched your search
            </h4>
          )}
        </div>


        {totalPages > 1 && (
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md mt-6 justify-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`${currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
                } px-4 py-2 rounded-lg transition`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`${currentPage === index + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                  } w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`${currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
                } px-4 py-2 rounded-lg transition`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DressCategoryCollection;
