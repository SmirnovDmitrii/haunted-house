import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Door = (props) => {
  const [
    doorColorTexture,
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorHeightTexture,
    doorNormalTexture,
    doorMetalnessTexture,
    doorRoughnessTexture,
  ] = useLoader(TextureLoader, [
    "/textures/door/color.jpg",
    "/textures/door/alpha.jpg",
    "/textures/door/ambientOcclusion.jpg",
    "/textures/door/height.jpg",
    "/textures/door/normal.jpg",
    "/textures/door/metalness.jpg",
    "/textures/door/roughness.jpg"
  ]);

  return (
    <mesh {...props}>
      <planeBufferGeometry args={[2, 2]} />
      <meshStandardMaterial color={"#aa7b7b"} />
    </mesh>
  );
};

export default Door;

Door.displayName = "Door";
