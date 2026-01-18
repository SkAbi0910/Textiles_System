import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../services/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductSingle() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleProductQuery(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null); // track color

  const dispatch = useDispatch();

  if (isLoading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <div className="py-20 text-center">Error loading product</div>;

  const product = data?.product;
  if (!product) return <div className="py-20 text-center">Product not found</div>;

  // Quantity handlers
  const increment = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Add to cart handler
  const handleAddToCart = () => {
  if (!selectedSize || !selectedColor) {
    alert("Please select a size and color!");
    return;
  }

  dispatch(
    addToCart({
      id: product._id,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price,  // add price
      name: product.name     // add name
    })
  );

  alert("Item added to cart!");
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      {/* Images */}
      <div>
        <img
          src={product.image[selectedImage]}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg mb-4"
        />
        <div className="flex gap-2">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                selectedImage === index ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 mt-1">{product.category}</p>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-2xl font-bold">${product.price}</span>
          {product.offerPrice && product.offerPrice < product.price && (
            <span className="line-through text-gray-400">${product.offerPrice}</span>
          )}
        </div>

        <p className={`mt-2 font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        {product.inStock && (
          <div className="mt-3 flex items-center gap-3">
            <button onClick={decrement} className="px-3 py-1 bg-gray-200 rounded">-</button>
            <span className="px-3 py-1 border rounded">{quantity}</span>
            <button onClick={increment} className="px-3 py-1 bg-gray-200 rounded">+</button>
          </div>
        )}

        <p className="mt-4">{product.description}</p>

        {/* Sizes */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Available Sizes:</h3>
          <div className="flex gap-2">
            {product.sizes.map((size, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded text-sm cursor-pointer ${
                  selectedSize === size ? "bg-blue-200 border-blue-500" : ""
                }`}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Colors:</h3>
          <div className="flex gap-2">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border cursor-pointer ${
                  selectedColor === color ? "ring-2 ring-blue-500" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        {product.popular && (
          <span className="mt-4 inline-block bg-yellow-400 text-white px-3 py-1 rounded">
            Popular
          </span>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
}
