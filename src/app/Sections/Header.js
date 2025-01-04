'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Header() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation
        className='!h-[700px]'
      >
        <SwiperSlide>
          <div className='w-full h-full slide1Bg flex items-center px-20'>
            <div className='flex flex-col gap-6 '>
              <h2 className='text-5xl text-white fancy-text'>Our New</h2>
              <div className='flex flex-col gap-2 w-2/3'>
                <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                  Relaxing Foods
                </h3>
                <p className='text-white text-xl'>
                  Indulge in our dry fruit and herb-infused treats crafted to
                  calm your mind, ease stress, and bring serenity to your day.
                </p>
              </div>
              <button className='bg-white rounded-full p-3 px-6 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide2Bg flex items-center px-20'>
            <div className='flex flex-col gap-6 '>
              <h2 className='text-5xl text-white fancy-text'>Our New</h2>
              <div className='flex flex-col gap-2 w-2/3'>
                <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                  Relaxing Essence
                </h3>
                <p className='text-white text-xl'>
                  Experience the soothing power of nature with our aromatic
                  blends designed to rejuvenate your senses and promote
                  relaxation.
                </p>
              </div>
              <button className='bg-white rounded-full p-3 px-6 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide3Bg flex items-center px-20'>
            <div className='flex flex-col gap-6 '>
              <h2 className='text-5xl text-white fancy-text'>Our New</h2>
              <div className='flex flex-col gap-2 w-2/3'>
                <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                  Natural Aphrodisiac
                </h3>
                <p className='text-white text-xl'>
                  Reignite passion and vitality with our expertly curated mix of
                  herbs and dry fruits, a natural boost to your intimate
                  moments.
                </p>
              </div>

              <button className='bg-white rounded-full p-3 px-6 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full slide4Bg flex items-center px-20'>
            <div className='flex flex-col gap-6 '>
              <h2 className='text-5xl text-white fancy-text'>Our New</h2>
              <div className='flex flex-col gap-2 w-2/3'>
                <h3 className='text-7xl font-bold text-yellow-500 leading-snug'>
                  Energey Booster
                </h3>
                <p className='text-white text-xl'>
                  Fuel your day with our high-energy snacks, packed with the
                  power of dry fruits and herbs to keep you active and focused.
                </p>
              </div>
              <button className='bg-white rounded-full p-3 px-6 w-max text-xl font-semibold'>
                See More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
