import React from 'react';
import { Mesh } from 'three';
import * as THREE from 'three';



interface BoxProps {
  position: [number, number, number];
}

export default function Box({ position }: BoxProps) {
  // Create a mesh for the box with a BufferGeometry from BoxGeometry
  const mesh = new Mesh();
  mesh.geometry = new THREE.BoxGeometry(0.1, .1, .1).toNonIndexed();
  mesh.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  mesh.position.set(...position);

  return (
    <mesh
      geometry={mesh.geometry}
      material={mesh.material}
      position={position} // Use the position array directly
      onClick={() => console.log('Box clicked!')}
      onPointerOver={(e) => (document.body.style.cursor = 'pointer')}
      onPointerOut={(e) => (document.body.style.cursor = 'auto')}
    />
  );
}