import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalScale={[0.001, 0.001]}
        dithering={true}
        roughness={1}
        mixStrength={40} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0.1} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        blur={[300, 100]} // Desenfoque del reflejo
        color="#0a0a0a" // Color base del suelo
        metalness={0.9} // Nivel de metalizado
      />
    </mesh>
  );
}
