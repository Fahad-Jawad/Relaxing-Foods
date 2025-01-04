import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Map from '../components/Map';

export default function Footer() {
  return (
    <>
    <Map />
    <div className='p-20 bg-black relative flex text-white'>
       <Image
          src={'/images/footerLeft.png'}
          alt='logo'
          width={200}
          height={200}
          className='absolute bottom-0 left-0 w-1/2 h-2/3 z-0 opacity-15'
        />
         <Image
          src={'/images/footerRight.png'}
          alt='logo'
          width={200}
          height={200}
          className='absolute top-0 right-0 w-1/2 h-2/3 z-0 opacity-15'
        />
      <div className='w-1/4 flex flex-col gap-4 z-20'>
        <Image
          src={'/images/relaxing-logo.png'}
          alt='logo'
          width={150}
          height={150}
          className='rounded-xl w-2/3 h-1/2'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel earum,
          eaque deleniti aperiam eius nihil ratione quidem, optio officiis a
        </p>
      </div>
      <div className='w-1/4 '>
        <div className='flex flex-col gap-4 mx-auto w-max'>
          <h2 className='text-2xl font-bold footer-heading'>Useful Links</h2>
          <Link href='#'>Home</Link>
          <Link href='#'>About Us</Link>
          <Link href='#'>Products</Link>
          <Link href='#'>Contact Us</Link>
        </div>
      </div>
      <div className='w-1/4'>
        <div className='flex flex-col gap-4 mx-auto w-max'>
          <h2 className='text-2xl font-bold footer-heading'>Follow Us Now</h2>
          <Link href='#' className='flex gap-2 items-center'>
            <Image
              src={'/images/icons/FacebookWhite.svg'}
              alt='relaxing-Food-Facebook'
              width={20}
              height={20}
            />
            Facebook
          </Link>
          <Link href='#' className='flex gap-2 items-center'>
            <Image
              src={'/images/icons/InstaWhite.svg'}
              alt='relaxing-Food-Instagram'
              width={20}
              height={20}
            />
            Instagram
          </Link>
          <Link href='#' className='flex gap-2 items-center'>
            <Image
              src={'/images/icons/Xwhite.svg'}
              alt='relaxing-Food-Twitter'
              width={20}
              height={20}
            />
            Twitter
          </Link>
        </div>
      </div>
      <div className='w-1/4 flex flex-col gap-4'>
        <div className='flex flex-col gap-4 mx-auto'>
          <h2 className='text-2xl font-bold footer-heading'>Contact Us</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            enim ad voluptatem. Unde molestias accusamus, hic libero deserunt,
            beatae{' '}
          </p>
          <div className='flex gap-1 items-center'>
            <Image
              src={'/images/icons/Send.svg'}
              alt='relaxing-Food-email'
              width={20}
              height={20}
            />
            <p> relaxingfood@gmail.com</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Image
              src={'/images/icons/Phone.svg'}
              alt='relaxing-Food-phone'
              width={20}
              height={20}
            />
            <p>+954894596456</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
