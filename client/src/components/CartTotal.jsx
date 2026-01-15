import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const CartTotal = ({ method, setMethod }) => {


  const {currency,getCartAmount,getCartCount,delivery_charges} = useContext(ShopContext)
  const location = useLocation()
  const isOrderPage = location.pathname.includes('/place_orders')

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto lg:mx-0">
      
      
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Order Summary
     <span className='text-green-600 font-semibold'>{getCartCount()} Items
          </span> </h3>

     <hr/>
     {isOrderPage && (

   
      <div className="space-y-4 text-gray-700 text-sm">
        <div className="flex justify-between">
          <h3>Payment</h3>
          <div onClick={() => setMethod('COD')} className={`${method === 'COD' ? 'bg-black' : 'bg-white'} cursor-pointer text-xs` }>Cash On Delivery</div>
          <div onClick={() => setMethod('Stripe')} className={`${method === 'Stripe' ? 'bg-black' : 'bg-white'} cursor-pointer text-xs` }>Stripe</div>
        </div>
        
       
        <hr className="my-2" />
        
      </div>
  )}
  <div className="space-y-3">
    <div className="flex justify-between">
      <h4>Price</h4>
      <span>{currency}{getCartAmount()}</span>
    </div>
    <div className="flex justify-between">
      <h4>Shipping Fee</h4>
      <span className='text-green-600 font-semibold'>
        {getCartAmount() === 0 ? `${currency}0.00` : `${currency}${delivery_charges}.00`}
      </span>
    </div>
    <div className="flex justify-between">
      <h4>Tax</h4>
      <span className='text-green-600 font-semibold'>
        {currency}{(getCartAmount() * 2) / 100}
      </span>
    </div>
    <div className="flex justify-between text-lg font-bold text-gray-900">
      <span>Total</span>
      <span>
        {currency}{getCartAmount() === 0 ? '0.00' : getCartAmount() + delivery_charges + (getCartAmount() * 2) / 100}
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
