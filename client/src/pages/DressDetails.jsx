import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../api/productApi'; // your API call
import { addToCart as addToCartAction } from '../redux/cartSlice'; // redux cart action

import { FaTruckFast } from 'react-icons/fa6';
import { TbHeart, TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';
import DressDescription from '../components/DressDescription';
import DressFeature from '../components/DressFeature';
import RelatedDresses from './RelatedDresses';

const DressDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currency = useSelector(state => state.currency.value); // Redux currency
  const [image, setImage] = useState(null);
  const [size, setSize] = useState(null);

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const product = useMemo(() => products.find(item => item._id === id), [products, id]);

  useEffect(() => {
    if (product) setImage(product.image[0]);
  }, [product]);

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size!');
      return;
    }
    dispatch(addToCartAction({ id: product._id, size, quantity: 1, price: product.price, name: product.name }));
  };

  if (isLoading) return <div className="text-center p-6">Loading product...</div>;
  if (isError || !product) return <div className="text-center p-6 text-red-500">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt;
        <Link to="/dresscollection" className="hover:text-blue-600">Collections</Link> &gt;
        <Link to={`/dresscollection/${product.category}`} className="hover:text-blue-600">{product.category}</Link>
      </p>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setImage(img)}
                alt={product.name}
                className={`w-20 h-24 object-cover rounded-lg cursor-pointer border ${image === img ? 'border-blue-500' : 'border-gray-200'}`}
              />
            ))}
          </div>
          <div>
            <img className="w-full h-[480px] object-cover rounded-2xl shadow-md" src={image} alt={product.name} />
          </div>
        </div>


        <div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h3>


          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-lg">
              <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarHalfFilled />
            </div>
            <p className="text-sm text-gray-500">(22)</p>
          </div>


          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-blue-600">{currency}{product.price}.00</h3>
            <h4 className="text-gray-400 line-through">{currency}{product.offerPrice}.00</h4>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>


          <div className="mb-6">
            <div className="flex gap-3">
              {[...product.sizes].sort((a, b) => ['S', 'M', 'L', 'XL', 'XXL'].indexOf(a) - ['S', 'M', 'L', 'XL', 'XXL'].indexOf(b))
                .map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded-lg border font-medium ${size === s ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:border-blue-600'}`}
                  >
                    {s}
                  </button>
                ))}
            </div>
          </div>


          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Add to Cart <TbShoppingBagPlus />
            </button>
            <button className="border border-gray-300 px-4 py-3 rounded-xl hover:bg-gray-100 transition"><TbHeart /></button>
          </div>


          <div className="flex items-center gap-2 text-green-600 mb-6">
            <FaTruckFast />
            <span className="text-sm">Free delivery on orders over 5000.00</span>
          </div>

          <hr className='mb-4' />
          <div className="text-sm text-gray-600 space-y-2">
            <p>Premium quality fabric with long-lasting comfort and durability.</p>
            <p>Easy 7-day return and exchange policy for a worry-free shopping experience.</p>
            <p>Secure payments and trusted delivery partners across Sri Lanka.</p>
          </div>
        </div>
      </div>


      <DressDescription />
      <DressFeature />
      <RelatedDresses product={product} id={id} />
    </div>
  );
};

export default DressDetails;
