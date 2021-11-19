import React from "react";

const Roof = (props) => {
  return (
    <mesh {...props}>
      <coneBufferGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color={"#b35f45"} />
    </mesh>
  );
};

export default Roof;

Roof.displayName = "Roof";
