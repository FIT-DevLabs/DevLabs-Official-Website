"use client";

import React, { useEffect } from "react";
import "../styles/heroStyles.css";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/servicesSection/ServicesSection"
import Contact from "@/components/home/contactSection/contactSection";

export default function Home() {

  return (
    <div> 
      <HeroSection />
      <Services/>
      <Contact/>
    </div>
  )
}
