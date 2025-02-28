import Image from 'next/image';
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import ProductCard from '../components/ProductCard';
import { productData } from '../constants/ProductsData';

export default function FeaturedProducts() {
  return (
    <div className='p-20'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl fancy-text font-bold' data-aos='zoom-out-left'>
          Featured Products
        </h2>
        <SectionDivider />
      </div>

      <div className='mt-2 flex flex-wrap'>
        {productData.slice(0, 8).map((product, i) => (
          <div
            key={i}
            className='w-1/4 p-4'
            data-aos='fade-up'
            data-aos-delay={i * 150}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
