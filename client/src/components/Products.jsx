import React,{useState} from "react";
import { useGetProductsQuery } from "../services/productsApi";
import { useNavigate } from "react-router-dom";
import dress1 from "../assets/dress_1.jpg";

export default function Products(){

const navigate = useNavigate();
const { data ,isLoading ,error } = useGetProductsQuery();
const products = data?.products || [];



if(isLoading) return <div className="text-center py-20">Loading...</div>;
if (error) return <div className="text-center py-20">Error loading products</div>;

const handleclick = (id)=>{

  navigate(`product/${id}`)

}


return(


     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"

            onClick={()=>handleclick(product._id)}
          >
            <img
              src={dress1} // show first image
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">${product.price}</span>
                {product.offerPrice && product.offerPrice < product.price && (
                  <span className="line-through text-gray-400 text-sm">
                    ${product.offerPrice}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
)






}