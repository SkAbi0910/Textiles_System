import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Item = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(
    product.colors?.[0] || "Default"
  );

  const handleNavigate = () => {
    navigate(
      `/dresscollection/${product.category.toLowerCase()}/${product._id}`
    );
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        size,
        color,
        quantity: 1,
        price: product.offerPrice,
      })
    );
  };

  return (
    <div className="cursor-pointer">

      <div
        className="w-72 h-96 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        onClick={handleNavigate}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={
            product.image.length > 1 && hovered
              ? product.image[1]
              : product.image[0]
          }
          alt={product.name}
          className="w-full h-48 object-cover transition-all duration-300"
        />
      </div>


      <div className="p-4" onClick={handleNavigate}>
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>

        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-600 font-bold">
            ${product.offerPrice}.00
          </span>
          <span className="text-xs text-gray-500">
            {product.category}
          </span>
        </div>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="w-full mb-2 border rounded px-2 py-1 text-sm"
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>


        {product.colors && (
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-full mb-2 border rounded px-2 py-1 text-sm"
          >
            {product.colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}


        <button
          onClick={handleAddToCart}
          className="w-full text-xs bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Add to Cart | ${product.offerPrice}.00
        </button>
      </div>
    </div>
  );
};

export default Item;
