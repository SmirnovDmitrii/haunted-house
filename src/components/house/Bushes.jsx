import React from "react";

const Bushes = (props) => {
  return (
    <>
      <mesh {...props} scale={[0.5, 0.5, 0.5]} position={[0.8, 0.2, 2.2]}>
        <sphereBufferGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={"#89c854"} />
      </mesh>
      <mesh {...props} scale={[0.25, 0.25, 0.25]} position={[1.4, 0.1, 2.1]}>
        <sphereBufferGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={"#89c854"} />
      </mesh>
      <mesh {...props} scale={[0.4, 0.4, 0.4]} position={[-0.8, 0.1, 2.2]}>
        <sphereBufferGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={"#89c854"} />
      </mesh>
      <mesh {...props} scale={[0.15, 0.15, 0.15]} position={[-1, 0.05, 2.6]}>
        <sphereBufferGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={"#89c854"} />
      </mesh>
    </>
  );
};

export default Bushes;

Bushes.displayName = "Bushes";
