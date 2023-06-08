import React, { useState } from 'react';
import Image from 'next/image';

const Diaporama = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative mt-16">
      <Image src={images[currentSlide]} className="w-full h-96 object-cover" />

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={prevSlide}
      >
        Previous
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Diaporama;
