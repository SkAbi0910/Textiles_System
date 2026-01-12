import React, { useContext } from "react";
import { FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const {navigate} =useContext(ShopContext)
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-20">
    {/* <form>
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-20">

 
      <div className="text-center mb-14">
       <Title text="Shop by Categories" title1={"Place"} title2={" Order"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"}
                />
        <p className="text-gray-600 mt-2">
          Complete your purchase securely
        </p>
     

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

    
        <div className="lg:col-span-2 space-y-8">

    
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <FaMapMarkerAlt className="text-tertiary" />
              Shipping Address
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="text" placeholder="Phone Number" className="input" />
              <input type="text" placeholder="Street Address" className="input md:col-span-2" />
              <input type="text" placeholder="City" className="input" />
              <input type="text" placeholder="Postal Code" className="input" />
            </div>
          </div>

        
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <FaCreditCard className="text-tertiary" />
              Payment Method
            </h3>

            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" defaultChecked />
                <span className="flex items-center gap-2">
                  <FaMoneyBillWave /> Cash on Delivery
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer opacity-60">
                <input type="radio" name="payment" disabled />
                Credit / Debit Card (Coming Soon)
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹3,999.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹0.00</span>
            </div>
            <hr />
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹3,999.00</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-tertiary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Confirm & Place Order
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By placing your order, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
      </form> */}
    </div>
  );
};

export default PlaceOrder;
