import Image from 'next/image';
import React from 'react';
import SectionDivider from './SectionDivider';

const TestimonialCard = () => {
  const image = '/images/client.png'; // Sample image path
  const testimonial =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore harum nisi deleniti autem distinctio soluta hic repellat? Explicabo, a expedita enim officiis ex consequatur recusandae fugit, quasi repellendus unde reiciendis?';
  const name = 'Jane Doe';

  return (
    <div className='testimonial-card relative rounded-xl shadow-lg border-2 border-gray-100 p-6 bg-white overflow-visible mt-20'>
      <Image
        src='/images/testimonialsBg.png'
        width={300}
        height={300}
        alt='f'
        className='absolute top-0 right-0 h-full w-1/4 opacity-5'
      />
      {/* Image Section */}
      <div className='absolute -top-12 left-1/2 transform -translate-x-1/2'>
        <Image
          src={image}
          alt={`Testimonial from ${name}`}
          width={300}
          height={300}
          className='w-28 h-28 rounded-full border-4 border-[#9b811ac8] shadow-md'
        />
      </div>
      <div className='flex justify-center mt-12'>
        <SectionDivider />
      </div>
      {/* Testimonial Content */}
      <p className='text-gray-600 text-center mt-2 text-lg'>"{testimonial}"</p>
      <div className='name text-center text-lg font-bold text-gray-800 mt-4'>
        {name}
      </div>
    </div>
  );
};

export default TestimonialCard;
