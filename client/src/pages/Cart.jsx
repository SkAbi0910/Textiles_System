import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { IoCloseCircleOutline } from 'react-icons/io5'
import CartTotal from '../components/CartTotal'
import Title from "../components/Title";
const Cart = () => {

    const { navigate, products, currency, cartItems, updateQuantity } = useContext(ShopContext)

    const [cartData, setCartData] = useState([])


    const increment = (id, size) => {
        const currQuantity = cartItems[id][size]
        updateQuantity(id, size, currQuantity + 1)
    }
    const decrement = (id, size) => {
        const currQuantity = cartItems[id][size]
        if (currQuantity > 1) {
            updateQuantity(id, size, currQuantity - 1)
        }
    }



    useEffect(() => {
        if (products.length > 0) {
            const tempData = []
            for (const itemId in cartItems) {
                for (const size in cartItems[itemId]) {
                    if (cartItems[itemId][size] > 0) {
                        tempData.push({
                            _id: itemId,
                            size: size,
                        })
                    }
                }
            }
            setCartData(tempData)
        }
    }, [products, cartItems])
    return products.length > 0 && cartItems ? (
        <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-20">

            <div className="text-center mb-14">
                <Title text="Shop by Categories" title1={"Shopping"} title2={" Cart"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"}
                />
                <div className="grid grid-cols-3 max-w-5xl mx-auto text-sm text-gray-600">

                    <p className="text-gray-600 mt-2">
                        Dress Details
                    </p> <p className="text-gray-600 mt-2">
                        SubTotal
                    </p> <p className="text-gray-600 mt-2">
                        Actions
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    {cartData.map((item, i) => {
                        const product = products.find((product) => product._id === item._id)
                        const quantity = cartItems[item._id][item.size]
                        return (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">




                                <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
                                    <img
                                        src={product.image[0]}
                                        alt="Dress"
                                        className="w-24 h-28 object-cover rounded-lg"
                                    />


                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">
                                            {product.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">{item.size}</p>
                                    </div>


                                    <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                                        <button onClick={() => decrement(item._id, item.size)} className="hover:text-tertiary">
                                            <FaMinus />
                                        </button>
                                        <span className="font-semibold">{quantity}</span>
                                        <button onClick={() => increment(item._id, item.size)} className="hover:text-tertiary">
                                            <FaPlus />
                                        </button>
                                    </div>






                                    <p className="font-semibold mt-2">{currency}{product.offerPrice * quantity}</p>
                                    <button onClick={() => updateQuantity(item._id, item.size, 0)}>
                                        <IoCloseCircleOutline />
                                    </button>
                                </div>
                            </div>



                        );
                    })}
                </div>

                <div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">
                        <CartTotal />
                        <button
                            onClick={() => navigate('/place_orders')}
                            className="block text-center mt-8 bg-tertiary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                            Proceed to Checkout
                        </button>



                    </div>
                </div>
            </div>
        </div>



    ) : null;
};


export default Cart
