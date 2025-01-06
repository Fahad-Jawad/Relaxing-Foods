import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Accordion = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  // This effect will update maxHeight based on content height
  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`accordion ${className}`}>
      <div
        className='accordion-header cursor-pointer p-2 rounded-lg bg-white !text-lg flex justify-between items-center'
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <Image
          src='/images/icons/ArrowDown.svg'
          alt='arrow'
          width={13}
          height={13}
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        ref={contentRef}
        className='accordion-content overflow-hidden transition-max-height duration-300 ease-in-out'
        style={{ maxHeight: '0px' }}
      >
        <div className='p-2'>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
