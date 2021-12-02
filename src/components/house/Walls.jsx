import React from "react";
import { useLoader } from "@react-three/fiber";
import { Float32BufferAttribute, TextureLoader } from "three";

const Walls = (props) => {
  const [
    bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture,
  ] = useLoader(TextureLoader, [
    "/textures/bricks/color.jpg",
    "/textures/bricks/ambientOcclusion.jpg",
    "/textures/bricks/normal.jpg",
    "/textures/bricks/roughness.jpg",
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
      <boxBufferGeometry args={[4, 2.5, 4]} ref={ref} />
      <meshStandardMaterial
        map={bricksColorTexture}
        oaMap={bricksAmbientOcclusionTexture}
        normalMap={bricksNormalTexture}
        roughness={bricksRoughnessTexture}
      />
    </mesh>
  );
};

export default Walls;

Walls.displayName = "Walls";
