'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '../Sections/TopBar';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <TopBar />
      <nav className='bg-gray-800 text-white sticky top-0 z-50 shadow-md px-20 py-4'>
        <div className='container mx-auto px-4 flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='text-base font-bold'>
            <Link href='/'>
            <Image src={'/images/relaxing-logo.png'} width={80} height={80} alt='relaxing-food logo' className='rounded-full' />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center space-x-8 text-base'>
            <Link href='/' className='hover:text-yellow-400'>
              Home
            </Link>
            <div className='relative group menu'>
              <div className='flex items-center'>
                <Link
                  href='#'
                  className='hover:text-yellow-400 flex items-center'
                >
                  About
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu text-sm'>
                <Link
                  href='/relaxing-food1'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  About Us
                </Link>
                <Link
                  href='/relaxing-food2'
                  className='block px-4 py-2 hover:bg-gray-600 border-y'
                >
                  Mission
                </Link>
                <Link
                  href='/relaxing-food3'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  Team
                </Link>
              </div>
            </div>
            <div className='relative group menu text-sm'>
              <div className='flex items-center'>
                <Link
                  href='#'
                  className='hover:text-yellow-400 flex items-center'
                >
                  Relaxing Foods
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu text-sm'>
                <Link
                  href='/relaxing-food1'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  Relaxing Food1
                </Link>
                <Link
                  href='/relaxing-food2'
                  className='block px-4 py-2 hover:bg-gray-600 border-y'
                >
                  Relaxing Food2
                </Link>
                <Link
                  href='/relaxing-food3'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  Relaxing Food3
                </Link>
              </div>
            </div>
            <div className='relative group menu'>
              <div className='flex items-center'>
                <Link
                  href='#'
                  className='hover:text-yellow-400 flex items-center'
                >
                  Well-being
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu'>
                <Link
                  href='/relaxing-food1'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  Well-being1
                </Link>
                <Link
                  href='/relaxing-food2'
                  className='block px-4 py-2 hover:bg-gray-600 border-y'
                >
                  Well-being2
                </Link>
                <Link
                  href='/relaxing-food3'
                  className='block px-4 py-2 hover:bg-gray-600'
                >
                  Well-being3
                </Link>
              </div>
            </div>

            <Link href='/products' className='hover:text-yellow-400'>
              Products
            </Link>
            <Link href='/contact-us' className='hover:text-yellow-400'>
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className='hidden md:flex items-center space-x-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/images/icons/FacebookWhite.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/images/icons/Xwhite.svg'
                alt='Twitter'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='/images/icons/InstaWhite.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className='md:hidden'>
            <button onClick={toggleMobileNav}>
              <span className='text-2xl'>&#9776;</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
            isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button onClick={toggleMobileNav} className='text-2xl text-black'>
              &times;
            </button>
          </div>

          {/* Mobile Links */}
          <div className='flex flex-col items-center text-black px-4'>
            <Link
              href='/'
              className='text-base font-medium border-b w-full text-start py-2'
            >
              Home
            </Link>
            <div className='w-full'>
              <button
                onClick={() => toggleAccordion(1)}
                className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center'
              >
                Relaxing Food
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='arrow'
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 1 ? 'max-h-40' : 'max-h-0'
                }`}
                style={{
                  transitionProperty: 'max-height',
                }}
              >
                <div className='flex flex-col bg-gray-200 text-base'>
                  <Link
                    href='/relaxing-food1'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Relaxing Food1
                  </Link>
                  <Link
                    href='/relaxing-food2'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Relaxing Food2
                  </Link>
                  <Link
                    href='/relaxing-food3'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Relaxing Food3
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href='/about-us'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              About Us
            </Link>
            <Link
              href='/products'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              Products
            </Link>
            <Link
              href='/contact-us'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className='absolute bottom-4 w-full flex justify-center space-x-6 px-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/FacebookIcon.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/XIcon.svg'
                alt='Twitter'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/InstaIcon.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
