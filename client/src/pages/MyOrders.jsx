import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import Title from '../components/Title'
import { dummyOrders } from "../assets/data";


const MyOrders = () => {

  const { currency, user } = useContext(ShopContext)
  const [orders, setOrders] = useState([])

  const loadData = async () => {
    setOrders(dummyOrders)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">
      <div className="mb-12 text-center">
        <Title text="Shop by Categories" title1={" My "} title2={" Orders"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"}
        />
        <p className="text-gray-600">
          Track your orders, view details, and manage your purchases
        </p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            {order.items.map((item, index) => (
              <div key={index}>
                <img
                  src={item.product.image[0]}
                  alt="Order"
                  className="w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800">
                      {item.product.name}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {currency}{item.product.offerPrice}.00
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {item.product.quantity}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {item.product.size}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/order-tracking"
                    className="px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-tertiary hover:text-white transition"
                  >
                    Track
                  </Link>
                  <Link
                    to="/order-details"
                    className="px-4 py-2 text-sm rounded-lg bg-tertiary text-white hover:opacity-90 transition"
                  >
                    View
                  </Link>
                </div>
              </div>))}
            <div>
              <div>
                <div>
                  <h4>Order ID:</h4>
                  <p>{order._id}</p>
                </div>
                <div>
                  <div>
                    <h5>Payment Status: </h5>
                    <p>{order.isPaid ? "Done" : "Pending"}</p>
                  </div>
                  <div>
                    <h5>Payment Method: </h5>
                    <p>{order.paymentMethod}</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h5>Ordered on: </h5>
                  <p>{new Date(order.createdAt).toDateString()}</p>
                </div>
                <div>
                  <h5>Amount: </h5>
                  <p>{currency}{order.amount}</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5>Status:</h5>
                <div>
                  <span>{order.status}</span>
                </div>
              </div>
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-tertiary hover:text-white transition">Track</button>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center mt-20">
          <FaBoxOpen className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No orders yet
          </h3>
          <p className="text-gray-500 mb-6">
            You haven’t placed any orders yet. Start shopping now!
          </p>
          <Link
            to="/dresscollection"
            className="px-6 py-3 bg-tertiary text-white rounded-xl font-medium"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
