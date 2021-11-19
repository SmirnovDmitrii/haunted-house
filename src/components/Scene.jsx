import React from 'react';
import Floor from "./Floor";

const Scene = () => {
  return (
    <>
      <ambientLight color={"#ffffff"} />
      <Floor rotation={[-Math.PI / 2, 0, 0]} />
    </>
  );
};

export default Scene;

Scene.displayName = 'Scene';

