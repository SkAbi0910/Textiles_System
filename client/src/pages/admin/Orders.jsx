import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../api/orderApi";

export default function Orders() {
  const currency = useSelector((state) => state.settings.currency);

  const { data: orders = [], isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading)
    return (
      <div className="p-6 text-center text-gray-500">Loading orders...</div>
    );

  if (isError)
    return (
      <div className="p-6 text-center text-red-500">Failed to load orders.</div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {orders.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No orders found
          </div>
        )}

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-md border overflow-hidden"
          >

            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-4 items-center p-4 bg-gray-100 border-b"
              >
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl border"
                />
                <div className="flex-1 space-y-1">
                  <h5 className="font-semibold text-gray-800">
                    {item.product.name}
                  </h5>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <div>
                      <h5>Price:</h5>
                      <p>
                        {currency}
                        {item.product.offerPrice}
                      </p>
                    </div>
                    <div>
                      <h5>Quantity:</h5>
                      <p>{item.quantity}</p>
                    </div>
                    <div>
                      <h5>Size:</h5>
                      <p>{item.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700">Order ID:</h4>
                  <p className="text-gray-500">{order._id}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-700">Customer</h5>
                    <p className="text-gray-500">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700">Phone:</h5>
                    <p className="text-gray-500">{order.address.phone}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700">Address:</h5>
                  <p className="text-gray-500">
                    {order.address.street}, {order.address.city}{" "}
                    {order.address.state}, {order.address.country}{" "}
                    {order.address.zipcode}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <h5 className="font-semibold text-gray-700">
                      Payment Status:
                    </h5>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700">
                      Payment Method:
                    </h5>
                    <p className="text-gray-500">{order.paymentMethod}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-700">Ordered on:</h5>
                  <p className="text-gray-500">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700">Amount:</h5>
                  <p className="text-lg font-bold text-gray-800">
                    {currency}
                    {order.amount}
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 bg-gray-50 border-t">
              <div className="flex items-center gap-3">
                <h5 className="font-semibold text-gray-700">Status:</h5>
                <div>
                  <select
                    className="px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    value={order.status}
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
              <button className="px-5 py-2 rounded-lg text-sm font-semibold bg-black text-white hover:opacity-90 transition">
                Track
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
