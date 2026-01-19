import React from 'react';

const DressDescription = ({ description, material, care }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <button className="text-xl font-semibold mb-2">Description</button>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <button className="text-xl font-semibold mb-2">Color Guide</button>
          <p className="text-gray-600">
            {material || "100% Cotton, soft and breathable, ensuring all-day comfort."}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <button className="text-xl font-semibold mb-2">Size Guide</button>
        </div>
      </div>
      <hr />
      <div>
        <h5>Details</h5>
        <p className="text-gray-600">
          This elegant dress is perfect for any occasion. Crafted with care, it combines style, comfort, and premium materials.
        </p>
      </div>
      <div>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Machine wash cold with like colors</li>
          <li>Do not bleach</li>
          <li>Hang to dry</li>
          <li>Iron on low heat if needed</li>
        </ul>
      </div>
    </section>
  );
};

export default DressDescription;
