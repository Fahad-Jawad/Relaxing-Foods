import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCard() {
  return (
    <Link href={'/product/1'}>
    <div className="group relative rounded-xl w-full h-full flex flex-col gap-8 border py-5 overflow-hidden bg-white cursor-pointer">
      {/* Product Image */}
      <Image
        src={'/images/product.png'}
        alt="product"
        width={200}
        height={200}
        className="mx-auto"
      />
      {/* Product Name */}
      <h3 className="text-xl font-semibold text-center">Dry Fruits Mix</h3>

      {/* Hidden Overlay */}
      <div className="absolute inset-0 flex flex-col p-5  bg-[#67D3E0] text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <h3 className="text-4xl font-bold mb-4 fancy-text">Dry Fruits Mix</h3>
        <p className="text-lg bg-white py-1 px-2 rounded-md font-semibold text-[#67D3E0] w-max ">Key Ingredients</p>
        <ul className="text-base mt-4 space-y-2">
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
