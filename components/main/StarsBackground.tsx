"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore

const StarBackground = (props: any) => {
  const ref: any = useRef();

  // Generate random positions for stars
  const [stars] = useState(() => {
    const positions = new Float32Array(9000); // Increase number of stars
    for (let i = 0; i < positions.length; i += 3) {
      const x = (Math.random() - 0.5) * 5; // Spread stars over larger area
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 5;
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20; // Slower rotation
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={stars} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff" // Set to white
          size={0.005 + Math.random() * 0.002} // Slight size variation
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function StarsBackground() {

  return (
  
      <div className="w-full h-auto fixed inset-0 z-[1] ">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </Canvas>
      </div>
    
  );
}
