import { usePlane } from "@react-three/cannon";

export default function Platform() {
  const [ref]:any = usePlane(() => ({
    position: [0, 0, 0], // Adjust position as needed
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh receiveShadow ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}