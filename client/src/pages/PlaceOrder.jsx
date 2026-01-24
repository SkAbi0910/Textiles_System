import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMapMarkerAlt } from "react-icons/fa";
import { placeOrder } from "../redux/orderSlice";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const currency = useSelector((state) => state.shop.currency || "₹");
  const user = useSelector((state) => state.auth.user);


  const [method, setMethod] = useState("COD");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });
  const cartItems = Object.entries(cartData).flatMap(([productId, variants]) =>
    Object.values(variants).map((v) => ({
      productId,
      ...v,
    }))
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first");

    const orderData = {
      userId: user._id,
      cartItems,
      shippingAddress: formData,
      paymentMethod: method,
      totalAmount
    };

    dispatch(placeOrder(orderData))
      .unwrap()
      .then((res) => {
        alert("Order placed successfully!");
      })
      .catch((err) => {
        console.error("Order failed:", err);
        alert("Failed to place order");
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-20">
      <form onSubmit={onSubmitHandler}>
        <div className="text-center mb-14">
          <Title
            text="Complete your purchase securely"
            title1="Place"
            title2=" Order"
            titleStyle="text-3xl font-extrabold text-gray-900 mb-10 text-center"
            paraStyle="text-gray-600 mb-16 text-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-tertiary" />
                Shipping Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input name="firstName" value={formData.firstName} onChange={onChangeHandler} placeholder="First Name" className="input" required />
                <input name="lastName" value={formData.lastName} onChange={onChangeHandler} placeholder="Last Name" className="input" required />
                <input name="email" value={formData.email} onChange={onChangeHandler} placeholder="Email" className="input" />
                <input name="state" value={formData.state} onChange={onChangeHandler} placeholder="State" className="input" required />
                <input name="street" value={formData.street} onChange={onChangeHandler} placeholder="Street" className="input" required />
                <input name="phone" value={formData.phone} onChange={onChangeHandler} placeholder="Phone Number" className="input" required />
                <input name="country" value={formData.country} onChange={onChangeHandler} placeholder="Country" className="input md:col-span-2" required />
                <input name="city" value={formData.city} onChange={onChangeHandler} placeholder="City" className="input" required />
                <input name="zipCode" value={formData.zipCode} onChange={onChangeHandler} placeholder="Postal Code" className="input" required />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">
            <CartTotal method={method} setMethod={setMethod} />
            <button className="w-full mt-8 bg-tertiary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              Confirm & Place Order
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              By placing your order, you agree to our Terms & Conditions
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
