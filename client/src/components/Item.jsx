import React , {useState, useContext} from 'react'
import { ShopContext } from '../context/ShopContext';

const Item = ({ product }) => {

    const {navigate,addToCart} = useContext(ShopContext);
     const [hovered, setHovered] = useState(false);
  return (
    <div className='cursor-pointer '>
      <div className='  w-72 h-96 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300' onClick={() => {navigate(`/dresscollection/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0);}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      >
<img src={product.image.length > 1 && hovered ? product.image[1] : product.image[0]} alt={product.name} className="w-full h-48 object-cover transition-all duration-300" />
      </div>
      <div  className='p-4' onClick={() => navigate(`/dresscollection/${product.category.toLowerCase()}/${product._id}`)}>
        <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <span className='text-blue-600 font-bold'>${product.price}</span>
        <div>
            <p>{product.category}</p>
            <button onClick={() => addToCart(product._id,size)} className='w-full text-xs '>Add to Cart | ${product.offerPrice}.00</button>
        </div>
      </div>
    </div>
  )
}

export default Item
