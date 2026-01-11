import React from 'react';
import { FaLeaf, FaStar, FaRuler, FaCheckCircle } from 'react-icons/fa';
import { TbArrowBack, TbTruckDelivery } from 'react-icons/tb';

const DressFeature = () => {
  const features = [
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      title: "Eco-Friendly Material",
      description: "Made from sustainable and breathable fabrics for comfort and care."
    },
    {
      icon: <FaStar className="text-yellow-400 text-3xl" />,
      title: "Premium Quality",
      description: "High-quality craftsmanship ensures long-lasting wear and elegance."
    },
    {
      icon: <FaRuler className="text-blue-500 text-3xl" />,
      title: "Perfect Fit",
      description: "Tailored to provide a flattering fit for all body types."
    },
    {
      icon: <FaCheckCircle className="text-purple-500 text-3xl" />,
      title: "Easy Care",
      description: "Machine washable and easy to maintain without losing shape or color."
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

      
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
          Key Features
        </h2>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <TbArrowBack/>
              <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Easy Return</h3>
              <p className="text-gray-600 text-sm">gjgkgjkjvjvjgbjksgdjkgajkdga</p></div>
            </div>
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <TbTruckDelivery/>
              <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">gjgkgjkjvjvjgbjksgdjkgajkdga</p></div>
            </div>
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
              <RiSecurePaymentLine/>
              <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">gjgkgjkjvjvjgbjksgdjkgajkdga</p></div>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default DressFeature;
