import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Euler, Quaternion, Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

export default function Model({ rocketProps, reset }:any) {
  const group = useRef<THREE.Group | null>(null);
  const {scene} = useGLTF('/portfolio-rocketfinal.glb');
  
  const rocket = useRef<THREE.Object3D | null>(null);
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0], // Set the initial Y position to 1
    rotation: [0, Math.PI / 2, 0], // Rotate the rocket to stand upright
    args: [2, 3.4, 1],
  }));
  const { camera, invalidate } = useThree();
  const [spacePressed, setSpacePressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [zPressed, setZPressed] = useState(false);

  const pos = useRef<[number, number, number]>([0,2,0])
  const rot = useRef<[number, number, number]>([0,Math.PI/2,0])
  const quaternion = useRef<[number, number, number, number]>([0,0,0,1])
  const angvel = useRef([0,0,0])

  useEffect(() => {
    api.position.subscribe(v => pos.current = v);
    api.rotation.subscribe(v => rot.current = v);
    api.quaternion.subscribe(v => quaternion.current = v);
    api.angularVelocity.subscribe(v => angvel.current = v);
    camera.position.set(0, 0, 1);
  }, [])

  useFrame((_, delta) => {
    
    const speedMultiplier = 10;
    const rotationSpeed = 0.03;
    const force = 1000
    if(ref.current) {
  
      ref.current.position.set(...pos.current);
      ref.current.rotation.set(...rot.current);
      ref.current.quaternion.set(...quaternion.current);

      if (spacePressed) {
        const thrustDirection = new Vector3(0, 1, 0).applyQuaternion(ref.current.quaternion);
        const forceS = thrustDirection.multiplyScalar(force * delta);
        api.applyForce(forceS.toArray(), [0, 0, 0]);
      }


    const yAxis = new Vector3(0, 1, 0);
    //const localXAxis = new Vector3(1, 0, 0);
  
    if (leftPressed) {
      const torque = yAxis.multiplyScalar(-rotationSpeed * force * delta *5);
      api.applyTorque(torque.toArray());
    }

    if (rightPressed) {
      const torque = yAxis.multiplyScalar(rotationSpeed * force * delta *5 );
      api.applyTorque(torque.toArray());
    }

    if (upPressed) {
      const localXAxis = new Vector3(1, 0, 0)
      const q = new Quaternion().setFromAxisAngle(localXAxis, rotationSpeed);
      ref.current.quaternion.multiply(q);
      api.quaternion.copy(ref.current.quaternion);
    }
  
    if (downPressed) {
      const localXAxis = new Vector3(1, 0, 0)
      const q = new Quaternion().setFromAxisAngle(localXAxis, -rotationSpeed);
      ref.current.quaternion.multiply(q);
      api.quaternion.copy(ref.current.quaternion);
    }
    

    
  
    
  }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setSpacePressed(true);
      }
      if (event.code === "ArrowLeft") {
        setLeftPressed(true);
      
      }
      if (event.code === "ArrowRight") {
        setRightPressed(true);
      }
      if (event.code === "ArrowUp") {
        setUpPressed(true);
      }
      if (event.code === "ArrowDown") {
        setDownPressed(true)
      }
      if (event.code === "KeyZ") {
        setZPressed(true);
      }
    };
  
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setSpacePressed(false);
      }
      if (event.code === "ArrowLeft") {
        setLeftPressed(false);
      
      }
      if (event.code === "ArrowRight") {
        setRightPressed(false);
      }
      if (event.code === "ArrowUp") {
        setUpPressed(false);
      }
      if( event.code === "ArrowDown"){
        setDownPressed(false)
      }
      if (event.code === "KeyZ") {
        setZPressed(false);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    api.velocity.set(0, 0, 0);
    api.angularVelocity.set(0, 0, 0);
    api.position.set(0, 2.2, 0);
    api.rotation.set(0, Math.PI / 2, 0);
    api.quaternion.set(0, 0, 0, 1);
    camera.position.set(0, 0, 1);
  }, [reset])
  

  return (
    <primitive ref={ref} object={scene} {...rocketProps}/>
  );
}

useGLTF.preload('/portfolio-rocketfinal.glb');