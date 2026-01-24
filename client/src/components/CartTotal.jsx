import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartAmount,
  selectCartCount,
} from "../redux/selectors/cartSelector";

const CartTotal = ({ method, setMethod }) => {
  const location = useLocation();
  const isOrderPage = location.pathname.includes("/place_orders");

  const currency = useSelector((state) => state.shop.currency);
  const deliveryCharges = useSelector(
    (state) => state.shop.delivery_charges
  );

  const cartAmount = useSelector(selectCartAmount);
  const cartCount = useSelector(selectCartCount);

  const tax = (cartAmount * 2) / 100;
  const total =
    cartAmount === 0 ? 0 : cartAmount + deliveryCharges + tax;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto lg:mx-0">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">
        Order Summary{" "}
        <span className="text-green-600 font-semibold">
          {cartCount} Items
        </span>
      </h3>

      <hr />

      {isOrderPage && (
        <div className="space-y-4 text-gray-700 text-sm mt-4">
          <div className="flex justify-between items-center">
            <h3>Payment</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setMethod("COD")}
                className={`px-3 py-1 rounded text-xs cursor-pointer ${
                  method === "COD"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                Cash On Delivery
              </button>

              <button
                onClick={() => setMethod("Stripe")}
                className={`px-3 py-1 rounded text-xs cursor-pointer ${
                  method === "Stripe"
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                Stripe
              </button>
            </div>
          </div>
          <hr />
        </div>
      )}

      <div className="space-y-3 mt-6">
        <div className="flex justify-between">
          <h4>Price</h4>
          <span>
            {currency}
            {cartAmount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <h4>Shipping Fee</h4>
          <span className="text-green-600 font-semibold">
            {cartAmount === 0
              ? `${currency}0.00`
              : `${currency}${deliveryCharges}.00`}
          </span>
        </div>

        <div className="flex justify-between">
          <h4>Tax (2%)</h4>
          <span className="text-green-600 font-semibold">
            {currency}
            {tax.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>
            {currency}
            {total.toFixed(2)}
          </span>
        </div>
      </div>

      <Link
        to="/place_orders"
        className="block mt-6 text-center bg-tertiary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Proceed to Checkout
      </Link>

      <Link
        to="/dresscollection"
        className="block mt-3 text-center text-sm text-gray-500 hover:text-tertiary"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartTotal;
