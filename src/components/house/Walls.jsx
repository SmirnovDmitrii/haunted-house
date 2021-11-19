import React from "react";

const Walls = (props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial color={"#ac8e82"} />
    </mesh>
  );
};

export default Walls;

Walls.displayName = "Walls";
