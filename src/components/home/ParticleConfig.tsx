// ParticleConfig.tsx
import React from 'react';

const particleConfig = {
  particles: {
    number: {
      value: 100, // Adjust the number of particles
    },
    shape: {
      type: "polygon",
      polygon: {
        nb_sides: 6, // Use a hexagon shape
      },
    },
    size: {
      value: 20, // Adjust the size of particles
    },
    // Other particle properties like color, opacity, etc.
  },
};

export default particleConfig;
