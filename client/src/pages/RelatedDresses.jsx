import React, { useContext  , useEffect, useState } from 'react'
import Title from '../components/Title'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'

const RelatedDresses = ({product,id}) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const {products} = useContext(ShopContext);

  useEffect(() => {
    if(products.length>0){
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => item.category == product.category && !id == item._id)
      setRelatedProducts(productsCopy.slice(0,3))
    }
  }, [products]);

  

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Title text="Discover our most popular and highly rated dresses that customers love." title1 ={"Related"} title2={" Products"} titleStyle={"text-3xl font-extrabold text-gray-900 mb-10 text-center"} paraStyle={"  text-gray-600 mb-16 text-center"} />
          {
            <Swiper
              slidesPerView={1}
              spaceBetween={10}   
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,

                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40, 
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {famousProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <span className="text-blue-600 font-bold">${product.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          }
         
        </div>
      </div>
    </section>
  )
}

export default RelatedDresses
