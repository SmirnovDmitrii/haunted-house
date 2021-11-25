import React, {useState} from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, Float32BufferAttribute } from "three";

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
    "/textures/door/roughness.jpg",
  ]);

  const ref = React.useRef();

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.setAttribute(
        "uv2",
        new Float32BufferAttribute(ref.current.attributes.uv.array, 2)
      );
    }
  }, []);

  return (
    <mesh {...props}>
      <planeBufferGeometry args={[2.2, 2.2, 100, 100]} ref={ref}/>
      <meshStandardMaterial
        map={doorColorTexture}
        transparent
        alphaMap={doorAlphaTexture}
        aoMap={doorAmbientOcclusionTexture}
        displacementMap={doorHeightTexture}
        displacementScale={0.1}
        normalMap={doorNormalTexture}
        metalnessMap={doorMetalnessTexture}
        roughness={doorRoughnessTexture}
      />
    </mesh>
  );
};

export default Door;

Door.displayName = "Door";
