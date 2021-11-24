import React, { Suspense } from "react";
import Floor from "./Floor";
import House from "./house/House";
import Graves from "./graves/Graves";
import Fog from "./Fog";
import Lights from "./Lights";

const Scene = () => {
  return (
    <>
      <Suspense fallback={""}>
        <Floor rotation={[-Math.PI / 2, 0, 0]} />
        <House />
        <Graves />
        <Fog />
        <Lights />
      </Suspense>
    </>
  );
};

export default Scene;

Scene.displayName = "Scene";
