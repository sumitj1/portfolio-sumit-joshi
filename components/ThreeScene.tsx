// components/ThreeScene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />

        {/* Add a simple 3D shape, like a cube */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
      </Canvas>
    </div>
  );
}
