import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedCategories() {
  return (
    <div className='flex p-20 py-10'>
      <div className='flex justify-between w-full gap-4'>
        <div className='rounded-xl bg-[#CDE9C7] flex gap-2 w-1/3 overflow-hidden ' data-aos="fade-left">
          <div className='w-1/2 h-full relative'>
            <Image
              src={'/images/drink1.png'}
              width={1000}
              height={1000}
              alt='Stress-Relief Foods'
              className='rounded-xl rounded-tr-none rounded-br-[8rem] absolute top-0 -left-0 w-full h-full'
            />
          </div>
          <div className='w-1/2 h-full flex flex-col px-2 py-4'>
            <h2 className='text-3xl font-bold text-[#647261]'>
              Relaxing Essence
            </h2>
            <div className='flex flex-col gap-2 mt-3 text-base text-[#647261] font-semibold'>
              <Link href={'#'} className='categoryLink'>⦾ Ashwa-Poppy Fusion</Link>
              <Link href={'#'} className='categoryLink'>⦾ Turmeric Bliss</Link>
              <Link href={'#'} className='categoryLink'>⦾ Garlic Elan</Link>
              <Link href={'#'} className='categoryLink'>⦾ Gingera</Link>
            </div>
          </div>
        </div>

        <div className='rounded-xl bg-[#ffd666] flex gap-2 w-1/3 overflow-hidden ' data-aos="fade-left" data-aos-delay="150">
          <div className='w-1/2 h-full relative'>
            <Image
              src={'/images/drink2.png'}
              width={1000}
              height={1000}
              alt='Stress-Relief Foods'
              className='rounded-xl rounded-tr-none rounded-br-[8rem] absolute top-0 -left-0 w-full h-full '
            />
          </div>
          <div className='w-1/2 h-full flex flex-col px-2 py-4'>
            <h2 className='text-3xl font-bold text-primary '>
              Energy Booster
            </h2>
            <div className='flex flex-col gap-2 mt-3 text-base text-primary font-semibold'>
              <Link href={'#'} className='categoryLink'>⦾ Golden Coconut Treat</Link>
              <Link href={'#'} className='categoryLink'>⦾ Almond Nirvana</Link>
              <Link href={'#'} className='categoryLink'>⦾ Walnut Luxe Delight</Link>
              <Link href={'#'} className='categoryLink'>⦾ Flax Elegance </Link>
              <Link href={'#'} className='categoryLink'>⦾ Olive-Fig Nectar</Link>
            </div>
          </div>
        </div>

        <div className='rounded-xl bg-[#67d3e1] flex gap-2 w-1/3 overflow-hidden ' data-aos="fade-left" data-aos-delay="300">
          <div className='w-1/2 h-full relative'>
            <Image
              src={'/images/drink3.png'}
              width={1000}
              height={1000}
              alt='Stress-Relief Foods'
              className='rounded-xl rounded-tr-none rounded-br-[8rem] absolute top-0 -left-0 w-full h-full '
            />
          </div>
          <div className='w-1/2 h-full flex flex-col px-2 py-4'>
            <h2 className='text-3xl font-bold text-[#32666d]'>
              Natural Aphrodisiac
            </h2>
            <div className='flex flex-col gap-2 mt-3 text-base text-[#32666d] font-semibold'>
              <Link href={'#'} className='categoryLink'>⦾ Salab-Mishri Indulgence</Link>
              <Link href={'#'} className='categoryLink'>⦾ Musli-Sufaid Wellness</Link>
              <Link href={'#'} className='categoryLink'>⦾ Shatavari Bloom</Link>
              <Link href={'#'} className='categoryLink'>⦾ Khurma Vital Blend</Link>
              <Link href={'#'} className='categoryLink'>⦾ Date Fusion Bites</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
