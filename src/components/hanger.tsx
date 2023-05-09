import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useGLTF, Stage, PresentationControls, useAnimations, Html } from '@react-three/drei';
import { Points, ShaderMaterial, Vector3 } from 'three';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import Works from './works';

export default function Hanger({ rocketProps, padProps, reset, setCanReset }: any) {
    const group = useRef<THREE.Group | null>(null);
    const { scene, animations } = useGLTF('/hanger.glb');
    const { actions, mixer } = useAnimations(animations, group);

    useFrame(() => {
        if (mixer && actions["CircleAction"] ) {
          const currentAnimation = actions["CircleAction"]
          const duration = currentAnimation.getClip().duration;
          const stopTime = duration - 0.1;
          if (currentAnimation.time >= stopTime) {
            currentAnimation.paused =true
          }
        }
      });
  
    useEffect(() => {
      if (actions["CircleAction"]) {
        actions["CircleAction"].play();
      }
    }, [actions]);
  
    return (
      <group ref={group}>
        <primitive scale={5} object={scene} />
        <Html distanceFactor={1} position={[0.913,2.74,1.06]} transform  rotation={[-.49,0,0]} >
            <div className='bg-black w-[1336px] h-[800px]  fixed text-white'>
                <Works/>
            </div>
        </Html>
      </group>
    );
  }

useGLTF.preload('/hanger.glb');