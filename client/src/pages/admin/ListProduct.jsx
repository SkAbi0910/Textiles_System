import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchProducts, deleteProduct, updateProduct } from "../../api/productApi";

export default function ListProduct() {
  const currency = useSelector((state) => state.settings.currency);
  const queryClient = useQueryClient();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin-products"],
    queryFn: fetchProducts,
  });


  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries(["admin-products"]),
  });


  const updateMutation = useMutation(
    ({ id, updatedData }) => updateProduct(id, updatedData),
    {
      onSuccess: () => queryClient.invalidateQueries(["admin-products"]),
    }
  );

  if (isLoading) return <div className="p-6 text-center text-gray-500">Loading products...</div>;
  if (isError) return <div className="p-6 text-center text-red-500">Failed to load products</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-100 text-sm font-semibold text-gray-600">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>In Stock</h5>
          <h5>Actions</h5>
        </div>

        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-8 gap-4 p-4 items-center border-b hover:bg-gray-50 transition"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-14 h-14 object-cover rounded-lg border"
            />
            <h5 className="font-medium text-gray-800 truncate">{product.name}</h5>
            <p className="text-gray-500 capitalize">{product.category}</p>
            <div className="font-semibold text-gray-700">{currency}{product.offerPrice}</div>


            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={product.inStock}
                  onChange={() =>
                    updateMutation.mutate({
                      id: product._id,
                      updatedData: { inStock: !product.inStock },
                    })
                  }
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition relative">
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></span>
                </div>
              </label>
            </div>


            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => alert("Open Edit Modal / Form here")}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => deleteMutation.mutate(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="p-6 text-center text-gray-500">No products found</div>
        )}
      </div>
    </div>
  );
}
