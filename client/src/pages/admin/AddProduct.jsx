import React, { useState } from 'react'
import upload_icon from '../../assets/upload_icons.png'

export default function AddProduct() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(10);
  const [offerPrice, setOfferPrice] = useState("10");
  const [category, setCategory] = useState("Men");
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [files, setFiles] = useState([])


  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <form className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6" onSubmit={onSubmitHandler}>
        <h2 className="text-2xl font-bold text-gray-800">
          Add New Product
        </h2>
        <div className="w-full">
          <h5 className="font-medium text-gray-700">
            Product Name
          </h5>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Write Product name ....'
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
        </div>
        <div className="w-full">
          <h5 className="font-medium text-gray-700">
            Product Description
          </h5>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text"
            placeholder='Write Product description...'
            className="mt-1 w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div >
          <div className="grid sm:grid-cols-3 gap-4">
            <div className='flex flex-row gap-4'>
              <div>
                <h5 className="font-medium text-gray-700">
                  Category
                </h5>
                <select onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-400">
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Winterwear">Winterwear</option>
                  <option value="Sportwear">Sportwear</option>
                </select>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-700" >
                Producr Price
              </h5>
              <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='10'
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <h5 className="font-medium text-gray-700" >
                Offer Price
              </h5>
              <input onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} type="number" placeholder='10'
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"

              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-medium text-gray-700" >Product Sizes</h5>
         <div className="flex flex-wrap gap-3 mt-2">
          {["S", "M", "L", "XL", "XXL"].map(size => (
            <span
                key={size}
                onClick={() =>
                  setSizes(prev =>
                    prev.includes(size)
                      ? prev.filter(item => item !== size)
                      : [...prev, size]
                  )
                }
                className={`px-4 py-1.5 rounded-full border cursor-pointer text-sm transition
                  ${sizes.includes(size)
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                  }`}
              >
                {size}
              </span>))}
         </div>
           
        </div>
        <div className="flex gap-3 mt-2">
          {
            Array(4).fill('').map((_, index) => (
              <label key={index} htmlFor={`images${index}`}
                className="w-20 h-20 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-400">
                <input onChange={(e) => {
                  const updatedFiles = [...files]
                  updatedFiles[index] = e.target.files[0]
                  setFiles(updatedFiles)
                }}
                  type="file" id={`image${index}`}
                  hidden
                />
                <img src={files[index] ? URL.createObjectURL(files[index]) : upload_icon} alt="uploadArea" width={67} height={67} className="w-full h-full object-cover rounded-lg" />
              </label>
            ))
          }
        </div>
        <div className="flex items-center gap-2">
          <input onChange={()=>setPopular(prev => !prev)} type='checkbox' checked={popular} id='popular' className="accent-blue-500"/>
          <label htmlFor='popular' className="text-gray-700 cursor-pointer">Add to Popular</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold transition">Add Product</button>
      </form>
    </div>
  )
}
