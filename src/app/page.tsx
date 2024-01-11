"use client";

import React, { useEffect } from "react";
import "../styles/heroStyles.css";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/servicesSection/ServicesSection"

export default function Home() {

  return (
    <div> 
      <HeroSection />
      <Services/>
    </div>
  )
}
