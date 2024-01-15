"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/Md";
import { useState } from "react";
import Image from "next/image";

export default function StorySectionCarousel() {
  const slides: string[] = [
    "carousel_1.jpg",
    "carousel_2.jpeg",
    "carousel_3.jpg",
    "carousel_4.jpg",
  ];
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-60 w-screen h-auto"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((imageName, index) => (
          <img
            key={index}
            src={"/story_section/carousel_images/" + imageName}
            alt={`Image ${index}`}
            width="100%"
            height="100%"
            className=""
          />
        ))}
      </div>
      <div className="absolute top-0 px-5 md:px-8 lg:px-10 text-2xl w-full flex justify-between items-center h-full">
        <div className="rounded-3xl bg-gray-400 w-[40px] h-[40px] flex items-center justify-center opacity-50">
          <button onClick={previousSlide}>
            <MdKeyboardArrowLeft />
          </button>
        </div>
        <div className="rounded-3xl bg-gray-400 w-[40px] h-[40px] flex items-center justify-center opacity-50">
          <button onClick={nextSlide}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
