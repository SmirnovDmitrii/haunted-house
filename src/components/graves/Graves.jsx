import React from "react";

const gravesArray = [...Array(80)].map((value, index) => {
  const angle = Math.random() * Math.PI * 2;
  const radius = 4 + Math.random() * 10.5;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const rotationGrave = (Math.random() - 0.5) * 0.4;

  return (
    <mesh
      position={[x, 0.3, z]}
      rotation={[0, rotationGrave, rotationGrave]}
      key={index}
    >
      <boxBufferGeometry args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial color={"darkgray"} />
    </mesh>
  );
});

const Graves = (props) => {
  return <group {...props}>{gravesArray}</group>;
};

export default Graves;

Graves.displayName = "Graves";
