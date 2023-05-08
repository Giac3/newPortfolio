import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Rocket() {
  const group = useRef<THREE.Group | null>(null);
  const { scene } = useGLTF('/rocket.glb');

  scene.position.set(5, 0, 0);

  useFrame(({ clock }) => {
    if (group.current) {
      const angle = clock.getElapsedTime();
      const x = 0.4 * Math.cos(angle);
      const z = 0.4 * Math.sin(angle);
      group.current.position.set(-x, 0, -z);

      
      const rotationAngle = Math.atan2(z, x) + Math.PI / 1;
      group.current.rotation.y = -rotationAngle;
    }
  });

  return <primitive ref={group} object={scene} />;
}

useGLTF.preload('/rocket.glb');