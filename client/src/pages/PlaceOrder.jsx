import React, { useContext, useState } from "react";
import { FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'

const PlaceOrder = () => {

  const {navigate,products,cartItems,setCartItems} =useContext(ShopContext)
  const [method , setMethod] = useState("COD")
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  })

  const onChangeHandler =(e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((data)=> ({...data,[name]:value}))
  }

const onSubmitHandler = (e) => {
  e.preventDefault()
}

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-20">
     <form onSubmit={onSubmitHandler}>
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
              <input onChange={onChangeHandler} value={formData.firstName} type="text" placeholder="First Name" className="input" required/>
              <input onChange={onChangeHandler} value={formData.lastName} type="text" placeholder="Last Name" className="input" required/>
              <input onChange={onChangeHandler} value={formData.email} type="email" placeholder="Email" className="input" />
              <input onChange={onChangeHandler} value={formData.state} type="text" placeholder="State" className="input" required/>
              <input onChange={onChangeHandler} value={formData.street} type="text" placeholder="Street" className="input" required/>
              <input onChange={onChangeHandler} value={formData.phone} type="tel"  placeholder="Phone Number" className="input" required/>
              <input onChange={onChangeHandler}  value={formData.country} type="text" placeholder="Country" className="input md:col-span-2" required />
              <input onChange={onChangeHandler}  value={formData.city} type="text"  placeholder="City" className="input" required/>
              <input onChange={onChangeHandler}  value={formData.zipCode} type="text" placeholder="Postal Code" className="input" required />
            </div>
          </div>

        
         
        </div>
 
        <div className="bg-white rounded-2xl shadow-sm p-8 h-fit">
         

          <div className="space-y-4 text-sm text-gray-600">
        <CartTotal method={method} setMethod={setMethod}/>
         

          <button className="w-full mt-8 bg-tertiary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Confirm & Place Order
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By placing your order, you agree to our Terms & Conditions
          </p> </div>
          </div>
          </div>
        </div>
      </div> 
      </form>
    </div>
  );
};

export default PlaceOrder;
