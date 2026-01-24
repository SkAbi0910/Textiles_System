import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Title from "../components/Title";
import { fetchOrders } from "../redux/orderSlice";
import { setCurrency } from "../redux/shopSlice";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.ordersList);
  const loading = useSelector((state) => state.orders.loading);
  const currency = useSelector((state) => state.shop.currency || "₹");
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchOrders(user._id));
    }
  }, [dispatch, user]);

  return (
    <div className="px-4 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">
      <div className="mb-12 text-center">
        <Title
          text="Track your orders, view details, and manage your purchases"
          title1=" My "
          title2=" Orders"
          titleStyle="text-3xl font-extrabold text-gray-900 mb-10 text-center"
          paraStyle="text-gray-600 mb-16 text-center"
        />
      </div>

      {loading && <p className="text-center text-gray-500">Loading orders...</p>}

      {!loading && orders.length === 0 && (
        <div className="text-center mt-20">
          <FaBoxOpen className="text-5xl text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No orders yet</h3>
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

      <div className="space-y-6 max-w-4xl mx-auto">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            {order.items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />
                <div className="flex-1 w-full">
                  <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                  <p className="text-lg font-bold text-gray-900">
                    {currency}{item.product.offerPrice}.00
                  </p>
                  <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                  <p className="text-gray-600 text-sm">Size: {item.size}</p>
                </div>
                <div className="flex gap-3 mt-2 md:mt-0">
                  <Link
                    to={`/order-tracking/${order._id}`}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-tertiary hover:text-white transition"
                  >
                    Track
                  </Link>
                  <Link
                    to={`/order-details/${order._id}`}
                    className="px-4 py-2 text-sm rounded-lg bg-tertiary text-white hover:opacity-90 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}

            <div className="mt-4 md:mt-0">
              <h5 className="font-semibold text-gray-700">Order ID:</h5>
              <p className="text-gray-600">{order._id}</p>
              <h5 className="font-semibold text-gray-700 mt-2">Payment Status:</h5>
              <p className={`${order.isPaid ? "text-green-600" : "text-yellow-600"}`}>
                {order.isPaid ? "Paid" : "Pending"}
              </p>
              <h5 className="font-semibold text-gray-700 mt-2">Payment Method:</h5>
              <p className="text-gray-600">{order.paymentMethod}</p>
              <h5 className="font-semibold text-gray-700 mt-2">Ordered On:</h5>
              <p className="text-gray-600">{new Date(order.createdAt).toDateString()}</p>
              <h5 className="font-semibold text-gray-700 mt-2">Amount:</h5>
              <p className="text-gray-800 font-bold">{currency}{order.amount}</p>
              <h5 className="font-semibold text-gray-700 mt-2">Status:</h5>
              <p className="text-gray-600">{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
