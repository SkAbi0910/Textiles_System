import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productApi"; // your API
import Item from "../components/Item";
import Title from "../components/Title";

const DressCategory = () => {
  const { dresscategory } = useParams();

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });


  const filtered = useMemo(() => {
    const target = (dresscategory ?? "").toLowerCase();
    return products.filter(
      (p) => (p?.category ?? "").toLowerCase() === target && p.inStock
    );
  }, [products, dresscategory]);

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-500">Loading products...</div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Title
        text="Category"
        title1="Category:"
        title2={` ${dresscategory}`}
        titleStyle="text-4xl font-extrabold text-gray-900 mb-10 text-center mt-20"
        paraStyle="text-gray-600 mb-16 text-center"
      />

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <Item key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <h4 className="text-red-400 text-xl text-center">
            No products found in “{dresscategory}”
          </h4>
        )}
      </div>
    </div>
  );
};

export default DressCategory;
