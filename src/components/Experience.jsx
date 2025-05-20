import { Environment, OrbitControls, Float } from "@react-three/drei";
import Book from "./Book";
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="studio"></Environment>

      {/* <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      > */}
      <Book />
      {/* </Float> */}

      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
