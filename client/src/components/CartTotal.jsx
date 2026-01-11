import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = ({ subtotal = 0, shipping = 0, tax = 0, currency = '₹' }) => {
  const total = subtotal + shipping + tax;

  

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto lg:mx-0">
      
      
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary</h3>

     
      <div className="space-y-4 text-gray-700 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{currency}{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className={`${shipping === 0 ? 'text-green-600 font-semibold' : ''}`}>
            {shipping === 0 ? 'Free' : `${currency}${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{currency}{tax.toFixed(2)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>{currency}{total.toFixed(2)}</span>
        </div>
      </div>

  
      <Link
        to="/placeorder"
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
