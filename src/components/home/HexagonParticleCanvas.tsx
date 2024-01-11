// HexagonParticleCanvas.tsx
import React, { useEffect } from 'react';
import Particles from 'react-particles';
import particleConfig from './particleConfig';
import tsParticles from 'tsparticles';

const HexagonParticleCanvas: React.FC = () => {

  useEffect(() => {
    window.onresize = () => {
      // Recalculate the canvas size on window resize
      window.dispatchEvent(new Event('resize'));
    };
  }, []);

  return (
    <div className="hexagon-particle-canvas">
      <Particles params={particleConfig} />
    </div>
  );

};

export default HexagonParticleCanvas;
