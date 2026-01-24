import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Item from '../components/Item';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

const RelatedDresses = ({ product, id }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);


  const currency = useSelector((state) => state.shop.currency || '$');


  const { data: products = [], isLoading, isError } = useQuery(
    ['products'],
    async () => {
      const response = await api.get('/products');
      return response.data;
    },
    { staleTime: 1000 * 60 * 5 }
  );

  useEffect(() => {
    if (products.length > 0 && product) {
      const filtered = products
        .filter(
          (item) =>
            item.category.toLowerCase() === product.category.toLowerCase() &&
            item._id !== id
        )
        .slice(0, 4);
      setRelatedProducts(filtered);
    }
  }, [products, product, id]);

  if (isLoading) return <p className="text-center py-10">Loading related products...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load products.</p>;

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Title
          text="Discover our most popular and highly rated dresses that customers love."
          title1="Related"
          title2=" Products"
          titleStyle="text-3xl font-extrabold text-gray-900 mb-10 text-center"
          paraStyle="text-gray-600 mb-16 text-center"
        />
        {relatedProducts.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src={item.image[0]} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <span className="text-blue-600 font-bold">
                      {currency}
                      {item.price}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No related products found.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedDresses;
