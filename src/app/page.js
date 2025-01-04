'use client';
import Image from 'next/image';
import Header from './Sections/Header';
import FeaturedCategories from './Sections/FeaturedCategories';
import Mission from './Sections/Mission';
import FeaturedProducts from './Sections/FeaturedProducts';
import Discounts from './Sections/Discounts';
import Testimonials from './Sections/Testimonials';

import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import ContactUs from './Sections/ContactUs';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false,
    });
  }, []);
  return (
    <div>
      <Header />
      <FeaturedCategories />
      <Mission />
      <FeaturedProducts />
      <Discounts />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
