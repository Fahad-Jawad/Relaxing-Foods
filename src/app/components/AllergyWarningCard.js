'use client'
import React, { useState } from 'react';

export default function AllergyWarningCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => setIsVisible(false), 300); // Matches animation duration
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 bg-red-100 border-l-4 border-red-500 p-4 rounded-lg shadow-lg max-w-xs z-50 transform transition-transform duration-300 ${
        isExiting ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="flex justify-between items-start">
        <h4 className="text-red-700 font-bold text-lg">⚠ Allergy Warning</h4>
        <button
          onClick={handleClose}
          className="text-red-500 text-xl font-bold hover:text-red-700"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <p className="text-red-600 text-sm mt-2">
        This product contains dry fruits and may cause allergic reactions in some individuals. If you are unsure, please consult a doctor before consuming.
      </p>
    </div>
  );
}
