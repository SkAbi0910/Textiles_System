import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useParams } from 'react-router-dom';
import { FaTruckFast } from 'react-icons/fa6';
import { TbHeart, TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';
import DressDescription from '../components/DressDescription';
import DressFeature from '../components/DressFeature';
import RelatedDresses from './RelatedDresses';

const DressDetails = () => {

  const { products, currency, addToCart } = useContext(ShopContext)
  const { id } = useParams()

  const product = products.find((item) => item._id === id)
  const [image, setImage] = useState(null)
  const [size, setSize] = useState(null)

  useEffect(() => {

    if (product) {
      setImage(product.image[0])
      console.log(product.name)
    }
  }, [products, product])

  return (
    product && (
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500 mb-6">
          <Link to={'/'} className="hover:text-blue-600">Home</Link>
          <Link to={'/dresscollection'} className="hover:text-blue-600">Collections</Link>
          <Link to={`/dresscollection/${product.category}`}>{product.category}</Link>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {product.image.map((item, i) => (
                <div key={i}>
                  <img src={item} onClick={() => setImage(item)} alt='product' className={`w-20 h-24 object-cover rounded-lg cursor-pointer border
                  ${image === item ? 'border-blue-500' : 'border-gray-200'}`} />
                </div>
              ))}
            </div>
            <div>
              <img className="w-full h-[480px] object-cover rounded-2xl shadow-md" src={image} alt='product' />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-lg">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
              </div>
              <p className="text-sm text-gray-500">(22)</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-blue-600">{currency}{product.price}.00</h3>
              <h4 className="text-gray-400 line-through">{currency}{product.price}.00</h4>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            <div className="mb-6">
              <div className="flex gap-3">
                {[...product.sizes].sort((a, b) => {
                  const order = ['S', 'M', 'L', 'XL', 'XXL']
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                  <button key={i} onClick={() => setSize(item)} className={`px-4 py-2 rounded-lg border font-medium
                      ${size === item
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:border-blue-600'}`}>{item}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <button onClick={() => addToCart(product._id, size)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Add to Cart <TbShoppingBagPlus /></button>
              <button className="border border-gray-300 px-4 py-3 rounded-xl hover:bg-gray-100 transition"><TbHeart /></button>
            </div>
            <div className="flex items-center gap-2 text-green-600 mb-6">
              <FaTruckFast />
              <span className="text-sm">Free delivery on over 5000.00</span>
            </div>
            <hr className='mb-4' />
            <div className="text-sm text-gray-600 space-y-2">
              <p>Premium quality fabric with long-lasting comfort and durability.</p>
              <p> Easy 7-day return and exchange policy for a worry-free shopping experience.</p>
              <p>Secure payments and trusted delivery partners across Sri Lanka.</p>
            </div>
          </div>

        </div>
        <DressDescription />
        <DressFeature />

        <RelatedDresses product={product} id={id} />

      </div>
    ))
}

export default DressDetails
