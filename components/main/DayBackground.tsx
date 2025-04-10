"use client";
import * as THREE from "three"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Clouds, Cloud, Sky as SkyImpl } from "@react-three/drei"

export default function App() {
  return (
    <div className="w-full h-auto fixed inset-0 z-[1] ">
    <Canvas camera={{ position: [0, -10, 10], fov: 75 }}>
      <Sky />
      <ambientLight intensity={Math.PI / 1.5} />
      <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <spotLight position={[-20, 0, 10]} color="gray" angle={0.15} decay={0} penumbra={-1} intensity={30} />
      <spotLight position={[20, -10, 10]} color="gray" angle={0.2} decay={0} penumbra={-1} intensity={20} />
    </Canvas></div>
  )
}

function Sky() {
    const cloud1 :any = useRef<THREE.Object3D>(null);
    const cloud2 :any = useRef<THREE.Object3D>(null);
    const cloud3 :any = useRef<THREE.Object3D>(null);
    const cloud4 :any = useRef<THREE.Object3D>(null);
    const cloud5 :any = useRef<THREE.Object3D>(null);
  
    useFrame((_, delta) => {
      const speed = 0.5; // Adjust for slower or faster cloud movement
  
      const moveCloud = (ref: React.RefObject<THREE.Object3D>) => {
        if (ref.current) {
          ref.current.position.x += delta * speed;
  
          // Reset cloud to left if it moves too far right
          if (ref.current.position.x > 30) {
            ref.current.position.x = -30;
          }
        }
      };
  
      moveCloud(cloud1);
      moveCloud(cloud2);
      moveCloud(cloud3);
      moveCloud(cloud4);
      moveCloud(cloud5);
    });
  
    return (
      <>
        <SkyImpl />
        <Clouds material={THREE.MeshLambertMaterial} limit={400} range={400}>
          <Cloud ref={cloud1} color="#D3D3D3" seed={2} position={[15, 0, 0]} />
          <Cloud ref={cloud2} color="#A9A9A9" seed={3} position={[-15, 0, 0]} />
          <Cloud ref={cloud3} color="#696969" seed={4} position={[0, 0, -12]} />
          <Cloud ref={cloud4} color="#DCDCDC" seed={5} position={[0, 0, 12]} />
          <Cloud
            ref={cloud5}
            concentrate="outside"
            growth={100}
            color="#F0F0F0"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
            position={[-20, 0, -10]}
          />
        </Clouds>
      </>
    );
  }
  