import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/data';
import toast from 'react-hot-toast'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserLogin, setShowUserLogin] = useState("")
  const [cartItems, setCartItems] = useState({})
  const delivery_charges = 300;
  const [isAdmin, setIsAdmin] = useState([])

  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };


  const addToCart = async (itemId, size) => {
    if (!size) return toast.error("Please select a size first")
    let cartData = structuredClone(cartItems);
    cartData[itemId] = cartData[itemId] || {}
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
    setCartItems(cartData)
    toast.success("Product added to Cart")

  }
  useEffect(() => {
    fetchProducts()
  }, []);

  const getCartCount = () => {
    let count = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }
    return count;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setCartItems(cartData)
    toast.success('Cart Updated')
  }

  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (const size in cartItems[itemId]) {
        total += product.offerPrice * cartItems[itemId][size];
      }
    }
    return total;
  }

  const value =
  {
    user,
    setUser,
    navigate,
    products,
    searchQuery,
    setSearchQuery,
    currency,
    setShowUserLogin,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    delivery_charges,
    setIsAdmin,
    isAdmin,
    fetchProducts

  };
  return (
    <div>
      <ShopContext.Provider value={value}>
        {children}
      </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider
