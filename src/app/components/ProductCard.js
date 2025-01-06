import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCard({product}) {
  return (
    <Link href={'/products/1'}>
    <div className="group relative rounded-xl w-full h-full flex flex-col gap-8 border-2 py-5 overflow-hidden bg-white cursor-pointer">
      {/* Product Image */}
      <Image
        src={'/images/product.png'}
        alt="product"
        width={150}
        height={150}
        className="mx-auto"
      />
      {/* Product Name */}
      <h3 className="text-xl font-semibold text-center">{product.name}</h3>

      {/* Hidden Overlay */}
      <div className="absolute inset-0 flex flex-col p-5  bg-[#99803d] text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <h3 className="text-3xl font-bold mb-4 fancy-text">{product.name}</h3>
        <p className="text-lg bg-white py-1 px-2 rounded-md font-semibold text-[#ccab51] w-max ">Key Ingredients</p>
        <ul className="text-base mt-2 space-y-1">
          <li>⦾ Almonds</li>
          <li>⦾ Cashews</li>
          <li>⦾ Raisins</li>
          <li>⦾ Walnuts</li>
        </ul>
      </div>
    </div>
    </Link>
  );
}
