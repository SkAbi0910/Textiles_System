import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

const orders = [
  {
    id: "ORD12345",
    date: "12 Jan 2026",
    status: "Delivered",
    price: 3999,
    image: "https://via.placeholder.com/120",
  },
  {
    id: "ORD12346",
    date: "18 Jan 2026",
    status: "Shipped",
    price: 2499,
    image: "https://via.placeholder.com/120",
  },
  {
    id: "ORD12347",
    date: "22 Jan 2026",
    status: "Processing",
    price: 1999,
    image: "https://via.placeholder.com/120",
  },
];

const statusStyle = {
  Delivered: "text-green-600 bg-green-100",
  Shipped: "text-blue-600 bg-blue-100",
  Processing: "text-orange-600 bg-orange-100",
};

const MyOrders = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">

      {/* Page Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          My <span className="text-tertiary">Orders</span>
        </h2>
        <p className="text-gray-600">
          Track your orders, view details, and manage your purchases
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Product Image */}
            <img
              src={order.image}
              alt="Order"
              className="w-28 h-28 object-cover rounded-xl"
            />

            {/* Order Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-wrap justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-800">
                  Order ID: {order.id}
                </h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-1">
                Ordered on: {order.date}
              </p>

              <p className="text-lg font-bold text-gray-900">
                ₹{order.price}.00
              </p>
            </div>

            {/* Actions */}
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
          </div>
        ))}
      </div>

      {/* Empty State */}
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
