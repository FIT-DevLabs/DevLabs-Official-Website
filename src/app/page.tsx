"use client";

import React, { useEffect } from "react";
import "../styles/heroStyles.css";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/servicesSection/ServicesSection";
import Contact from "@/components/home/contactSection/contactSection";
import StorySection from "@/components/home/StorySection";
import BlogSection from '@/app/blogs/page'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <StorySection />
      <BlogSection />
      <Contact />
    </div>
  );
}
