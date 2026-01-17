import React from 'react'
import { FaStar } from 'react-icons/fa'
import Title from '../components/Title'
const Worthiness = () => {

  const worthiness = [
    {
      name: "Anjali Perera",
      date: "2024-11-12",
      message: "The quality of the dresses exceeded my expectations. The fabric feels premium and the fit is just perfect.",
      image: "/assets/users/user1.jpg"
    },
    {
      name: "Kavindi Silva",
      date: "2024-10-28",
      message: "Fast delivery and beautiful packaging. I truly felt valued as a customer.",
      image: "/assets/users/user2.jpg"
    },
    {
      name: "Nethmi Fernando",
      date: "2024-09-15",
      message: "I love how comfortable and stylish the dresses are. Perfect for both casual and special occasions.",
      image: "/assets/users/user3.jpg"
    },
    {
      name: "Ishara Jayasinghe",
      date: "2024-08-22",
      message: "Customer support was very friendly and helpful. The return process was smooth and easy.",
      image: "/assets/users/user4.jpg"
    },
    {
      name: "Pavithra Wickramasinghe",
      date: "2024-07-30",
      message: "This shop has become my favorite place to buy dresses. Stylish designs at affordable prices.",
      image: "/assets/users/user5.jpg"
    }
  ]

  return (
    <section className="bg-gray-50 py-20">

      <Title
        text="Quality, Comfort & Care"
        title1={"Why We’re"}
        title2={" Worth It"}
        titleStyle="text-4xl font-extrabold text-gray-900 mb-6 text-center mt-20"
        paraStyle="text-gray-600 mb-16 text-center max-w-2xl mx-auto"
      />
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {worthiness.map((worthiness, index) => (
          <div key={index} className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center'>
            <div className='flex mb-3'>

              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={16} className='text-yellow-400 mx-0.5' />
              ))}
            </div>
            <div>
              <p className='text-gray-400 text-xs'>{worthiness.date}</p>
            </div>
            <p className='text-gray-600 mb-6 text-sm'>{worthiness.message}</p>
            <div className='flex flex-col items-center'>
              <img src={worthiness.image} alt={worthiness.name} className='w-16 h-16 rounded-full object-cover mb-2' />
              <p className='font-semibold text-gray-900'>{worthiness.name}</p></div>
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default Worthiness
