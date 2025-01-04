'use client';
import SectionDivider from '@/app/components/SectionDivider';
import Image from 'next/image';
import React from 'react';

import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from 'react';
import AOS from 'aos';

export default function ProductDetailPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false,
    });
  }, []);
  return (
    <div>
      <div className='p-20 py-40 product-name'>
        <h2 className='text-7xl font-bold text-yellow-500 text-center'>
          Product Detail
        </h2>
      </div>
      <div className='my-20 flex flex-col items-center'>
        <h2
          className='text-6xl fancy-text font-extrabold'
          data-aos='zoom-out-left'
        >
          {' '}
          Product Name
        </h2>
        <SectionDivider />
      </div>
      <div className='flex flex-col p-20 relative  '>
        <Image
          src={'/images/detailBg.png'}
          alt='detail'
          width={700}
          height={500}
          className='absolute z-0 -top-10 left-[27%]'
          data-aos='zoom-in'
        />

        <div className='flex'>
          <div className='w-1/3 px-4 z-10'>
            <div className='flex flex-col gap-32 my-20'>
              <div className='flex items-center ingredient gap-5'>
                <div className='flex flex-col gap-2'>
                  <h3
                    className='text-base font-bold text-end'
                    data-aos='flip-down'
                  >
                    Almond
                  </h3>
                  <p
                    className='text-end'
                    data-aos='fade-left'
                    data-aos-delay='150'
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto iste voluptas
                  </p>
                </div>
                <div
                  className='p-4 rounded-full bg-orange-100'
                  data-aos='zoom-in'
                  data-aos-delay='150'
                >
                  <Image
                    src='/images/ingredients/almond.png'
                    alt='ingredient-almond'
                    width={120}
                    height={120}
                    className='w-[120px] h-[70px]'
                  />
                </div>
              </div>
              <div className='flex items-center ingredient  gap-5'>
                <div className='flex flex-col gap-2'>
                  <h3
                    className='text-base font-bold text-end'
                    data-aos='flip-down'
                    data-aos-delay='300'
                  >
                    Wallnut
                  </h3>
                  <p
                    className='text-end'
                    data-aos='fade-left'
                    data-aos-delay='300'
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto iste voluptas
                  </p>
                </div>
                <div
                  className='p-4 rounded-full bg-orange-100'
                  data-aos='zoom-in'
                  data-aos-delay='300'
                >
                  <Image
                    src='/images/ingredients/wallnut.png'
                    alt='ingredient-almond'
                    width={120}
                    height={120}
                    className='w-[120px] h-[70px]'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/3 z-10'>
            <Image
              src='/images/product.png'
              alt='product'
              width={600}
              height={600}
              data-aos='zoom-in'
            />
          </div>
          <div className='w-1/3 px-4 z-10'>
            <div className='flex flex-col gap-32 mt-20'>
              <div className='flex items-center ingredient gap-5'>
                <div
                  className='p-4 rounded-full bg-orange-100'
                  data-aos='zoom-in'
                  data-aos-delay='150'
                >
                  <Image
                    src='/images/ingredients/fig.png'
                    alt='ingredient-almond'
                    width={120}
                    height={120}
                    className='w-[120px] h-[70px]'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-base font-bold' data-aos='flip-down'>
                    Fig
                  </h3>
                  <p data-aos='fade-right' data-aos-delay='150'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto iste voluptas
                  </p>
                </div>
              </div>
              <div className='flex items-center ingredient gap-5'>
                <div
                  className='p-4 rounded-full bg-orange-100'
                  data-aos='zoom-in'
                  data-aos-delay='300'
                >
                  <Image
                    src='/images/ingredients/cashew.png'
                    alt='ingredient-almond'
                    width={120}
                    height={120}
                    className='w-[120px] h-[70px]'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-base font-bold' data-aos='flip-down' data-aos-delay='300'>
                    Cashew
                  </h3>
                  <p data-aos='fade-right' data-aos-delay='300'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto iste voluptas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
