import React from "react";

const Floor = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[30, 30]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Floor;
