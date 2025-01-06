'use client';

import React, { useState, useEffect } from 'react';
import { productData, categoriesData } from '@/app/constants/ProductsData';
import Link from 'next/link';
import Footer from '../Sections/Footer';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordian';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';

export default function ProductsPage({ params }) {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;
  
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);
  
    useEffect(() => {
      async function fetchCategory() {
        const { category, subcategory } = await params;
  
        setCategory(category || ''); // Set category, default to an empty string
        setSubcategory(subcategory || ''); // Set subcategory, default to an empty string
  
        if (!category && !subcategory) {
          // No category or subcategory provided, show all products
          const allProducts = productData; // Assume productData contains all products
          setCategoryProducts(allProducts);
          setFilteredProducts(allProducts);
        } else {
          const categoryData = categoriesData.find(
            (cat) => cat.category === category
          );
  
          if (categoryData) {
            if (subcategory) {
              const subcategoryData = categoryData.subcategories.find(
                (sub) => sub.name === subcategory
              );
              if (subcategoryData) {
                const products = subcategoryData.products.map((id) =>
                  productData.find((product) => product.id === id)
                );
                setCategoryProducts(products);
                setFilteredProducts(products); // Initialize filtered products
              } else {
                const allProducts = categoryData.subcategories.reduce(
                  (acc, sub) => {
                    const products = sub.products.map((id) =>
                      productData.find((product) => product.id === id)
                    );
                    return [...acc, ...products];
                  },
                  []
                );
                setCategoryProducts(allProducts);
                setFilteredProducts(allProducts); // Initialize filtered products
              }
            } else {
              const allProducts = categoryData.subcategories.reduce((acc, sub) => {
                const products = sub.products.map((id) =>
                  productData.find((product) => product.id === id)
                );
                return [...acc, ...products];
              }, []);
              setCategoryProducts(allProducts);
              setFilteredProducts(allProducts); // Initialize filtered products
            }
          }
        }
  
        setPage(1); // Reset page to 1 when category or subcategory changes
      }
  
      fetchCategory();
    }, [params]);
  
    useEffect(() => {
      const startIdx = (page - 1) * itemsPerPage;
      const endIdx = startIdx + itemsPerPage;
      setVisibleProducts(filteredProducts.slice(startIdx, endIdx));
    }, [page, filteredProducts]);
  
    const handleSearch = () => {
      const filtered = categoryProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setPage(1); // Reset to first page when search is applied
    };
  
    const handleSearchChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
  
      if (query.trim() === '') {
        // Reset filtered products to categoryProducts when search bar is empty
        setFilteredProducts(categoryProducts);
      }
    };
  
    return (
      <>
        <div>
          {/* Header */}
          <div className="w-full productsPageName py-40 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white text-center capitalize">
              {category ? `${category.replace('-', ' ')} - ${subcategory || ''}` : 'All Products'}
            </h1>
          </div>
  
          {/* Content */}
          <div className="flex gap-4 my-10 mx-2">
            {/* Sidebar */}
            <div className="w-1/5 p-5 bg-gray-100 rounded-lg filter-bar h-auto overflow-x-hidden filter-sidebar max-h-screen">
              {/* Search Bar */}
              <div className="flex items-center mb-5">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full text-lg p-4 rounded-lg border border-gray-300 focus:outline-none rounded-tr-none rounded-br-none"
                  placeholder="Search products..."
                />
                <button
                  onClick={handleSearch}
                  className="p-4 bg-primary text-white text-lg rounded-lg rounded-tl-none rounded-bl-none"
                >
                  Search
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                {categoriesData.map((cat) => (
                  <Accordion
                    key={cat.category}
                    title={cat.category}
                    className="p-2 rounded-lg bg-white !text-lg capitalize"
                  >
                    <div className="flex flex-col gap-1 text-base">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          href={`/categories/${cat.category.replace(
                            ' ',
                            '-'
                          )}/${sub.name.replace(' ', '-')}`}
                          className="underline-animation w-max capitalize"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>
  
            {/* Products Section */}
            <div className="w-4/5 flex flex-col gap-1 products">
              {/* Info Bar */}
              <div className="flex justify-between items-start px-4">
                <p className="text-xl text-gray-300">
                  Showing {visibleProducts.length} of {filteredProducts.length}{' '}
                  products
                </p>
              </div>
  
              {/* Products */}
              <div className="flex flex-wrap mt-5">
                {visibleProducts.length > 0 ? (
                  visibleProducts.map((product, index) => (
                    <div
                      key={`product-${index}`}
                      className="w-1/4 p-1"
                      data-aos="fade-up"
                      data-aos-delay={index * 40}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-100 rounded-lg">
                    <p className="text-gray-500 text-lg font-medium">
                      No products available for this category.
                    </p>
                  </div>
                )}
              </div>
  
              {/* Pagination */}
              {filteredProducts.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-4 mt-6">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-lg ${
                      page === 1
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-primary text-white'
                    }`}
                  >
                    Previous
                  </button>
                  <p className="text-gray-700 text-lg">
                    Page {page} of{' '}
                    {Math.ceil(filteredProducts.length / itemsPerPage)}
                  </p>
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={page * itemsPerPage >= filteredProducts.length}
                    className={`px-4 py-2 rounded-lg ${
                      page * itemsPerPage >= filteredProducts.length
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-primary text-white'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
