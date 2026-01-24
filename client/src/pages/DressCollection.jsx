import React, { useState, useEffect, useMemo } from "react";
  import { useQuery } from "@tanstack/react-query";
  import { useSelector } from "react-redux";
  import Title from "../components/Title";
  import Item from "../components/Item";
  import { fetchProducts } from "../api/productApi";

  const DressCollection = () => {
    const searchQuery = useSelector((state) => state.search.query);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3; 

   
    const {
      data: products = [],
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      staleTime: 60_000,
    });

    const normalizedQuery = (searchQuery || "").toLowerCase().trim();

    
    const filteredProducts = useMemo(() => {
      const list = Array.isArray(products) ? products : [];
      return list
        .filter((p) => p && p.inStock) 
        .filter((p) => {
          if (!normalizedQuery) return true;
          const name = p?.name ? String(p.name).toLowerCase() : "";
          return name.includes(normalizedQuery);
        });
    }, [products, normalizedQuery]);

    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));


    useEffect(() => {
      setCurrentPage(1);
    }, [normalizedQuery, products]);

    
    useEffect(() => {
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    }, [totalPages, currentPage]);

    
    useEffect(() => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    }, [currentPage]);

    if (isLoading) {
      return <div className="p-6 text-center text-gray-500">Loading products...</div>;
    }

    if (isError) {
      return (
        <div className="p-6 text-center text-red-500">
          Failed to load products{error?.message ? `: ${error.message}` : "."}
        </div>
      );
    }

    const start = (currentPage - 1) * productsPerPage;
    const end = currentPage * productsPerPage;
    const pageItems = filteredProducts.slice(start, end);

    return (
      <div className="bg-slate-100 min-h-screen">

  <Title
    text="Dress Collection"
    title1="Dress"
    title2=" Collection"
    titleStyle="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center pt-24"
    paraStyle="text-gray-600 mb-14 text-center"
  />

  <div className="max-w-7xl mx-auto px-6 pb-20">
 =
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredProducts.length > 0 ? (
        pageItems.map((product) => (
          <div
            key={product._id}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <Item product={product} />
          </div>
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center py-20">
          <h4 className="text-amber-400 text-2xl font-semibold">
            Oops! No dresses found
          </h4>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters or search keywords
          </p>
        </div>
      )}
    </div>

   
    {filteredProducts.length > productsPerPage && (
      <div className="flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur
                      px-6 py-4 rounded-2xl shadow-lg mt-10 justify-center">
       
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-full font-medium transition
            ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-amber-400 hover:text-black"
            }`}
        >
          ← Previous
        </button>

      
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300
              ${
                currentPage === index + 1
                  ? "bg-amber-400 text-black scale-110"
                  : "hover:bg-amber-400/30"
              }`}
          >
            {index + 1}
          </button>
        ))}

       
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-full font-medium transition
            ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-amber-400 hover:text-black"
            }`}
        >
          Next →
        </button>
      </div>
    )}
  </div>
</div>

    );
  };

  export default DressCollection;