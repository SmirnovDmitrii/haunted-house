import React from "react";
import { Canvas } from "@react-three/fiber";

import CameraControls from "./components/CameraControls";
import Scene from "./components/Scene";

const App = () => {
  return (
    <Canvas camera={{ position: [10, 5, 20] }} gl>
      <CameraControls />
      <Scene />
    </Canvas>
  );
};

export default App;
