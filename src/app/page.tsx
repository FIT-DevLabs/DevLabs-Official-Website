"use client";

import React, { useEffect } from "react";
import "../styles/heroStyles.css";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/servicesSection/ServicesSection";
import Contact from "@/components/home/contactSection/contactSection";
import StorySection from "@/components/home/StorySection";
import BlogSection from '@/app/blogs/page'
import ProjectSection from '@/components/home/projectSection/projectSection'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    ["storysectiondiv", "carouseldiv", "projectsection", "contactussection"].forEach((className) =>
      animateElement(
        `.${className}`,
        { y: 200, opacity: 0, scale: 1 },
        { y: 0, scale: 1, opacity: 1 }
      )
    );
  });

  const animateElement = (
    selector: string,
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    const element = document.querySelector(selector);
    gsap.fromTo(
      element,
      { ...from },
      {
        ...to,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: getScrollTrigger(selector),
      }
    );
  };

  const getScrollTrigger = (trigger: string) => ({
    trigger,
    start: "top bottom",
    end: "top bottom",
    toggleActions: "play none none none",
    scrub: 1,
  });
  return (
    <div style={{ overflowX: "hidden" }} className="overflow-hidden">
      <HeroSection />
      <Services />
      <StorySection />
      <ProjectSection />
      {/* <BlogSection /> */}
      <Contact />
    </div>
  );
}
