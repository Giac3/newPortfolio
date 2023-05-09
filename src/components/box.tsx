import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';



interface BoxProps {
  position: [number, number, number];
}

export default function Box({ position }: BoxProps) {
  const { scene } = useGLTF('/about.glb');
  const [isClicked, setIsClicked] = useState(false);
  const boxRef = useRef<any>();
  const [hasMovedUp, setHasMovedUp] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useFrame(({ clock }) => {
    if (isClicked && boxRef.current && !hasMovedUp) {
      boxRef.current.position.z += 0.01


      
      if (boxRef.current.position.z >= position[2] + 0.5) {
        setHasMovedUp(true);
      }
    }
    if (!isClicked && boxRef.current && hasMovedUp) {
      boxRef.current.position.z -= 0.01

      
      if (boxRef.current.position.z <= position[2] -1.06) {
        setHasMovedUp(false);
      }
    }
  });

  return (
    <group ref={boxRef}>
      <primitive
        onClick={handleClick}
        onPointerOver={(e: Event) => (document.body.style.cursor = 'pointer')}
        onPointerOut={(e: Event) => (document.body.style.cursor = 'auto')}
        position={position}
        scale={0.06}
        rotation={[-1.8, 0, 2.9]}
        object={scene}
      />
    </group>
  );
}
