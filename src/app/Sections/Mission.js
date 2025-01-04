import Image from 'next/image';
import React from 'react';
import './styles/Mission.css';
import SectionDivider from '../components/SectionDivider';
export default function Mission() {
  return (
    <div className='p-20 flex mission relative'>
      <Image
        src={'/images/missionbg.png'}
        alt='relaxing food mission statement img'
        width={1250}
        height={1250}
        className='w-full rounded-xl h-full absolute top-0 left-0 z-0 opacity-5 aspect-square'
      />
      <div className='w-1/2 flex justify-start relative z-10'>
        <Image
          src={'/images/missionside.png'}
          alt='relaxing food mission statement img'
          width={1250}
          height={1250}
          className='w-10/12 rounded-xl h-full absolute top-0 left-0'
          data-aos="zoom-out-left"
        />
        <Image
          src={'/images/Energey Booster.png'}
          alt='relaxing food mission statement img'
          width={1250}
          height={1250}
          className='w-8/12 rounded-xl h-5/6 absolute -bottom-8 right-20'
          data-aos="zoom-out-left"
          data-aos-delay="150"
        />
      </div>
      <div className='w-1/2 flex flex-col my-20 z-10'>
        <h2 className='text-4xl fancy-text font-bold' data-aos="fade-right">Our Mission Statement</h2>
        <SectionDivider />

        <p data-aos='fade-up' data-aos-delay="300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore odio
          architecto vitae! Neque earum omnis laborum magnam sequi veniam
          repellendus pariatur sit, corporis possimus aperiam, ad non aspernatur
          dolore nesciunt.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          doloribus incidunt fugit error eaque nobis, quas blanditiis, quae eos
          omnis voluptas, quos minus nemo unde rerum tempora. Perspiciatis,
          nostrum sit.
        </p>

        <button className='p-3 px-6 bg-black text-white w-max mt-4 rounded-xl' data-aos='fade-left' data-aos-delay="300">
          Contact Now
        </button>
      </div>
    </div>
  );
}
