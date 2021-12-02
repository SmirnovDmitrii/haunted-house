import React from "react";
import { useLoader } from "@react-three/fiber";
import { Float32BufferAttribute, TextureLoader, RepeatWrapping } from "three";

const Floor = (props) => {
  const [
    grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  ] = useLoader(TextureLoader, [
    "/textures/grass/color.jpg",
    "/textures/grass/ambientOcclusion.jpg",
    "/textures/grass/normal.jpg",
    "/textures/grass/roughness.jpg",
  ]);

  grassColorTexture.repeat.set(8, 8);
  grassAmbientOcclusionTexture.repeat.set(8, 8);
  grassNormalTexture.repeat.set(8, 8);
  grassRoughnessTexture.repeat.set(8, 8);

  grassColorTexture.wrapS = RepeatWrapping
  grassAmbientOcclusionTexture.wrapS = RepeatWrapping
  grassNormalTexture.wrapS = RepeatWrapping
  grassRoughnessTexture.wrapS = RepeatWrapping

  grassColorTexture.wrapT = RepeatWrapping
  grassAmbientOcclusionTexture.wrapT = RepeatWrapping
  grassNormalTexture.wrapT = RepeatWrapping
  grassRoughnessTexture.wrapT = RepeatWrapping

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
      <planeBufferGeometry args={[30, 30]} ref={ref} />
      <meshStandardMaterial
        map={grassColorTexture}
        aoMap={grassAmbientOcclusionTexture}
        normalMap={grassNormalTexture}
        roughness={grassRoughnessTexture}
      />
    </mesh>
  );
};

export default Floor;
