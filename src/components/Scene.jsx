import React from "react";
import Floor from "./Floor";
import House from "./house/House";
import Graves from "./graves/Graves";

const Scene = () => {
  return (
    <>
      <ambientLight color={"#ffffff"} intensity={0.5} />
      <Floor rotation={[-Math.PI / 2, 0, 0]} />
      <House />
      <Graves />
    </>
  );
};

export default Scene;

Scene.displayName = "Scene";
