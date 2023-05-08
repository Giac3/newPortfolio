import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useCylinder } from '@react-three/cannon';

const Loop = (props:any) => {
  const radius = 2;
  const tube = 0.3;
  const radialSegments = 12;
  const tubularSegments = 24;


  const [ref, api] = useCylinder(() => ({
    mass: 1,
    position: props.position,
    rotation: [Math.PI / 2, 0, 0],
    args: [tube, tube, radius, radialSegments],
    ...props
  }));

  return (
    <mesh ref={ref as any} receiveShadow castShadow>
      <torusBufferGeometry
        attach="geometry"
        args={[radius, tube, radialSegments, tubularSegments]}
      />
      <meshStandardMaterial attach="material"  />
    </mesh>
  );
};

export default Loop;