"use client";
import { useState } from "react";
import Image from "next/image";
const arrowleft: any = (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="#FFFFFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const arrowright: any = (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="#FFFFFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function StorySectionCarousel() {
  const slides: string[] = [
    "facultyPic1.jpg",
    "facultyPic1.jpg",
    "facultyPic1.jpg",
    "facultyPic1.jpg",
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
        className="flex transition ease-out duration-60 w-screen relative"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((imageName, index) => (
          <Image
            key={index}
            src={"/story_section/carousel_images/" + imageName}
            alt={`Image ${index}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ minWidth: "100%", height: "auto" }}
          />
        ))}
      </div>
      <div className="absolute top-0 px-5 md:px-8 lg:px-10 text-2xl w-full flex justify-between items-center h-full">
        <div className="rounded-3xl bg-gray-400 w-[40px] h-[40px] flex items-center justify-center opacity-50">
          <button onClick={previousSlide}>
            {arrowleft}
          </button>
        </div>
        <div className="rounded-3xl bg-gray-400 w-[40px] h-[40px] flex items-center justify-center opacity-50">
          <button onClick={nextSlide}>
            {arrowright}
          </button>
        </div>
      </div>
    </div>
  );
}
