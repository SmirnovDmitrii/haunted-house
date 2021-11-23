import React from "react";
import { Canvas } from "@react-three/fiber";

import CameraControls from "./components/CameraControls";
import Scene from "./components/Scene";

const App = () => {
  return (
    <Canvas
      camera={{ position: [4, 3, 6] }}
      gl
      style={{ backgroundColor: "#262837" }}
    >
      <CameraControls />
      <Scene />
    </Canvas>
  );
};

export default App;
