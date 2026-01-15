import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item';
import Title from '../components/Title';

const DressCategory = () => {
  const { dresscategory } = useParams();
  const { products = [] } = useContext(ShopContext) || {};

  const filtered = useMemo(() => {
    const target = (dresscategory ?? '').toLowerCase();
    return products.filter(p => (p?.category ?? '').toLowerCase() === target && p.inStock);
  }, [products, dresscategory]);

  return (
    <div className="bg-white min-h-screen">
      <Title
        text="Category"
        title1="Category:"
        title2={` ${dresscategory}`}
        titleStyle="text-4xl font-extrabold text-gray-900 mb-10 text-center mt-20"
        paraStyle="text-gray-600 mb-16 text-center"
      />
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map(product => (
              <Item key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <h4 className="text-red-400 text-xl text-center">
            No products found in “{dresscategory}”
          </h4>
        )}
      </div>
    </div>
  );
};

export default DressCategory;