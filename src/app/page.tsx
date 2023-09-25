"use client";
import React, { useEffect } from "react";
import "../styles/heroStyles.css";
import HexagonParticleCanvas from "@/components/home/HexagonParticleCanvas";
import VANTA from "vanta";
import { DOTS } from "vanta/dist/vanta.dots.min";

export default function Home() {
  useEffect(() => {
    // Initialize the VANTA.DOTS effect
    const vantaEffect = VANTA.DOTS({
      el: "#animation-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      showLines: false,
    });

    // Cleanup the VANTA effect when the component unmounts
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="heroSection">
        <div className="heroSubSection1">
          <h1 className="heroText1">WHERE IDEAS BECOME SOFTWARE</h1>
          <p className="heroText2">
            Our expertise at DevLabs lies in translating imaginative ideas into
            functional software solutions. Join us in shaping a digital future
            that transforms concepts into reality.
          </p>
          <button className="heroBtn">
            <span>Discover</span>
          </button>
          {/* <section>
            <HexagonParticleCanvas />
          </section> */}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"></script>
    </div>
  );
}
