import React from "react";

const Door = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[2, 2]} />
      <meshStandardMaterial color={"#aa7b7b"} />
    </mesh>
  );
};

export default Door;

Door.displayName = "Door";
