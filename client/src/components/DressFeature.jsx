import React from 'react';
import { TbArrowBack, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';

const DressFeature = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <TbArrowBack className="mx-auto text-3xl text-blue-600"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Easy Return</h3>
              <p className="text-gray-600 text-sm">Hassle-free returns within 7 days of purchase.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <TbTruckDelivery className="mx-auto text-3xl text-green-600"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick doorstep delivery across major cities.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center">
            <RiSecurePaymentLine className="mx-auto text-3xl text-purple-600"/>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">All transactions are encrypted and safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressFeature;
