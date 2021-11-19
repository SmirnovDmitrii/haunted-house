import React from "react";
import Walls from "./Walls";
import Roof from "./Roof";

const House = (props) => {
  return (
    <group {...props}>
      <Walls position={[0, 1.25, 0]} />
      <Roof position={[0, 3, 0]} rotation={[0, Math.PI / 4, 0]} />
    </group>
  );
};

export default House;

House.displayName = "House";
