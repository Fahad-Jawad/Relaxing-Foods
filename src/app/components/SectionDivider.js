import Image from 'next/image';
import React from 'react';

export default function SectionDivider() {
  return (
    <Image
      src={'/images/section-divider.png'}
      alt='section divider'
      width={350}
      height={150}
      className='w-[135px] rounded-xl h-[50px]'
      data-aos="flip-up"
      data-aos-delay='150'
    />
  );
}
