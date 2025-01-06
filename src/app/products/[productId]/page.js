'use client';
import SectionDivider from '@/app/components/SectionDivider';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams to access params
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';
import { productData } from '@/app/constants/ProductsData';

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null); // State to store the product
  const { productId } = useParams(); // Get productId from the URL using useParams hook

  useEffect(() => {
    if (productId) {
      console.log('pp',productId)

      // Find the product from productData using productId
      const foundProduct = productData.find((product) => product.id == productId);
      console.log('ff',foundProduct)
      if (foundProduct) {
        setProduct(foundProduct); // Set the product in state
      }
    }
  }, [productId]); // Run this effect when productId changes

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false,
    });
  }, []);

  if (!product) {
    return <div>Loading...</div>; // Show a loading message if product is not found
  }
  return (
    <div>
      <div className='p-20 py-40 product-name'>
        <h2 className='text-7xl font-bold text-yellow-500 text-center'>
          Product Detail
        </h2>
      </div>
      <div className='my-20 flex flex-col items-center'>
        <h2
          className='text-3xl fancy-text font-extrabold text-primary'
          data-aos='flip-down'
        >
          Best For You
        </h2>
        <h3
          className='text-6xl font-bold my-1'
          data-aos='zoom-out-left'
          data-aos-delay='150'
        >
          {product.name}
        </h3>
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
                  <h3
                    className='text-base font-bold'
                    data-aos='flip-down'
                    data-aos-delay='300'
                  >
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

      <div className='flex items-center p-20'>
        <div className='w-1/2'>
          <h2 className='text-4xl font-bold'>Description</h2>
          <SectionDivider />
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            distinctio ipsa at obcaecati iure? Maiores voluptatibus minus fugit
            quia explicabo laudantium eum esse sapiente, error quisquam
            provident, eos ratione corporis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Odio explicabo placeat maxime hic,
            laborum provident quo quaerat commodi illum repellendus possimus
            quia ab ex aliquam aperiam veritatis eaque ipsa labore.
          </p>

          <h3 className='text-base bg-primary p-1 px-4 mt-4 text-white rounded-full w-max'>
            Benifits
          </h3>
          <div className='flex   gap-6 mt-4 text-base text-gray-400'>
            <div className='w-1/2 flex flex-col gap-2'>
              <ul className='custom-list'>
                <li>
                  Almonds, walnuts, and cashews are rich in Vitamin E,
                  magnesium, potassium, and calcium.
                </li>
                <li>
                  Dry fruits boost energy with natural sugars like fructose and
                  glucose.
                </li>
              </ul>
            </div>
            <div className='w-1/2 flex flex-col gap-2'>
              <ul className='custom-list'>
                <li>
                  Healthy fats in nuts improve cholesterol by lowering LDL and
                  raising HDL.
                </li>
                <li>Some dry fruits act as prebiotics, aiding gut health.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <Image
            src='/images/product.png'
            alt='product'
            width={400}
            height={300}
            data-aos='zoom-in'
            className='w-2/3 h-2/3'
          />
        </div>
      </div>
    </div>
  );
}
