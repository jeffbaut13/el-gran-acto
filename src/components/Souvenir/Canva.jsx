import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useProgress, Html, OrbitControls } from "@react-three/drei";

import { PortaRetrato } from "./PortaRetrato";

function Loader() {
  const { progress, active } = useProgress();

  return (
    <Html center>
      <p className="text-black loader">{progress.toFixed(1)} % loaded</p>
    </Html>
  );
}

export const Canva = ({
  open,
  snap,
  cameraControlRef,
  group,

  abrirDije,
}) => {
  return (
    <>
      <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]}>
        <OrbitControls ref={cameraControlRef} enabled={false} />

        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          //color={"#e9e2b4"}
          //color={"blue"}
          position={[-10, 30, -10]}
          intensity={6}
          shadow-bias={-0.001}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          castShadow
          ////color={"red"}
          color={"#e9e2b4"}
          position={[10, 20, 10]}
          intensity={6}
          shadow-bias={-0.001}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight
          castShadow
          position={[0, 2, 0]}
          intensity={10}
          color={"#e9e2b4"}
          shadow-bias={-0.001}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={<Loader />}>
          <PortaRetrato />
        </Suspense>
      </Canvas>
    </>
  );
};
