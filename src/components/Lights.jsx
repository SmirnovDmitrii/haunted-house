import React from "react";

const AmbientLight = () => {
  return <ambientLight color={"#b9d5ff"} intensity={0.12} />;
};

const MoonLight = (props) => {
  return <directionalLight {...props} color={"#b9d5ff"} intensity={0.12} />;
};

const DoorLight = (props) => {
  return <pointLight {...props} color={"#ff7d46"} intensity={1} distance={5} />;
};

const Lights = () => {
  return (
    <>
      <AmbientLight />
      <MoonLight position={[4, 5, -2]} />
      <DoorLight position={[0, 2.2, 2.7]} />
    </>
  );
};

export default Lights;

Lights.displayName = "Lights";
