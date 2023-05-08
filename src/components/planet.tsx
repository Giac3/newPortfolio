import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useGLTF, Stage, PresentationControls, useAnimations } from '@react-three/drei';
import { Points, ShaderMaterial, Vector3 } from 'three';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

export default function Planet({ rocketProps, padProps, reset, setCanReset }:any) {
  const group = useRef<THREE.Group | null>(null);
  const item = useGLTF('/planet.glb');
  // Particle emitter
  


  return (
    <primitive onclick={() => console.log('click')} object={item.scene}/>
  );
}

useGLTF.preload('/planet.glb');