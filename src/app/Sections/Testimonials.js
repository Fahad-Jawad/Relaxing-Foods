'use client'
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import TestimonialCard from '../components/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonials() {
  return (
    <div className='p-20'>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl fancy-text font-bold' data-aos="zoom-out-left">Testimonials</h2>
        <h3 className='text-4xl font-bold' data-aos="fade-right" data-aos-delay="150">What People Say</h3>
        <SectionDivider />

        <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        autoHeight

        navigation
        className='!h-[450px] w-full'
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
