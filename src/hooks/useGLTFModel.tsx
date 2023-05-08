import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function useGLTFModel(path:string, onLoad:any) {
  const gltf = useGLTF(path);
  useEffect(() => {
    if (gltf.scene) {
      onLoad();
    }
  }, [gltf, onLoad]);

  return gltf;
}