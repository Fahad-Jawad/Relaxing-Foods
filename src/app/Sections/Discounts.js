import React from 'react';
import './styles/Discounts.css';
import ShapeDividerUp from '../components/ShapeDividerUp';
import ShapeDividerDown from '../components/ShapeDividerDown';
import Image from 'next/image';
export default function Discounts() {
  return (
    <div className='p-20 py-44 discounts relative'>
        <ShapeDividerUp />
        <ShapeDividerDown />
      <div className='w-5/12 rounded-full p-10 py-32 bg-[#9b811ac8] flex flex-col gap-4 items-center text-white text-center' data-aos="zoom-in-left">
        <h2 className='text-2xl fancy-text'>30% off for Date's Products</h2>
        <h3 className='text-4xl font-bold'>Big Deals of the Week</h3>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fuga
          cumque ducimus sapiente quidem eos enim. Nulla, quis explicabo.
          Dolorem expedita quos amet vitae odit aperiam consectetur quis maxime
          mollitia?
        </p>

        <h4 className='text-lg font-bold'>To Get New Of Our Deals</h4>
        <div className='w-2/3 border-2 border-white flex justify-between rounded-full p-2 px-4 '>
        <input type="text" className='bg-transparent outline-none placeholder:text-white w-full p-1' placeholder='Type your email' />
        <button className='rounded-full bg-white p-2'>
            <Image src={'/images/icons/Send.svg'} alt='email send icon' width={20} height={20} />
        </button>
        </div>

      </div>
    </div>
  );
}
