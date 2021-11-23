import React from "react";

const Floor = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[30, 30]} />
      <meshStandardMaterial color={"#a9c388"} />
    </mesh>
  );
};

export default Floor;
