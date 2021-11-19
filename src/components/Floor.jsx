import React from "react";

const Floor = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[20, 20]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Floor;
