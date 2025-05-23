// import { Loader } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import { Experience } from "./components/Experience";
import { UI } from "./components/ui/UI";

function App() {
  return (
    <>
      <UI />
      <LoadingScreen />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
