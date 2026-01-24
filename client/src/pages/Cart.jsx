import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const items = [];
  for (let productId in cartData) {
    for (let variantKey in cartData[productId]) {
      const variant = cartData[productId][variantKey];
      items.push({
        productId,
        ...variant,
      });
    }
  }


  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (items.length === 0)
    return (
      <div className="text-center py-20 text-gray-600">
        Your cart is empty.{" "}
        <Link to="/dresscollection" className="text-blue-500 underline">
          Shop Now
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border rounded-lg p-4"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">
                Size: {item.size} | Color: {item.color}
              </p>
              <p className="text-sm text-gray-500">Price: ${item.price}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 border rounded">{item.quantity}</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() =>
                  dispatch(removeFromCart({ id: item.productId, size: item.size, color: item.color }))
                }
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-xl font-bold">${getTotal()}</span>
      </div>


      <Link
        to="/place_orders"
        className="block mt-6 text-center bg-amber-400 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
