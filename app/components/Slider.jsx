"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Product from "./Products";

const slides = [
  {
    name: "Mycompany.IO",
    description: "Mycompany.IO is the most experienced Jitsi Meet development company.Jitsi Meet installation, configuration, customization, deployment,auto scaling, maintenance, and commercial support.",
    image:"https://placekitten.com/400/300"
  },
  {
    name: "Mycompany.IO",
    description: "Mycompany.IO is the most experienced Jitsi Meet development company.Jitsi Meet installation, configuration, customization, deployment,auto scaling, maintenance, and commercial support.",
    image:"https://placekitten.com/400/300"
  },
  {
    name: "Mycompany.IO",
    description: "Mycompany.IO is the most experienced Jitsi Meet development company.Jitsi Meet installation, configuration, customization, deployment,auto scaling, maintenance, and commercial support.",
    image:"https://placekitten.com/400/300"
  },
  {
    name: "Mycompany.IO",
    description: "Mycompany.IO is the most experienced Jitsi Meet development company.Jitsi Meet installation, configuration, customization, deployment,auto scaling, maintenance, and commercial support.",
    image:"https://placekitten.com/400/300"
  },
  {
    name: "Mycompany.IO",
    description: "Mycompany.IO is the most experienced Jitsi Meet development company.Jitsi Meet installation, configuration, customization, deployment,auto scaling, maintenance, and commercial support.",
    image:"https://placekitten.com/400/300"
  }
 
]
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative bg-[#242d45] mt-[4rem]">
      <div className="overflow-hidden">
        <div
          className="flex ease-in-out duration-500"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center"
            >
              <Product slide={slide}/>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

