import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useProgress,
  Html,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Model } from "./Model";

import { Ground } from "./Ground";
function Loader() {
  const { progress, active } = useProgress();

  return (
    <Html center>
      <p className="text-black loader">{progress.toFixed(1)} % loaded</p>
    </Html>
  );
}

export const Canva = ({ activePaso, model, cameraControlRef }) => {
  return (
    <div className="canvas-container absolute top-0 left-0 z-10">
      <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]}>
        <OrbitControls ref={cameraControlRef} enabled={false} />

        <ambientLight intensity={2} />
        <directionalLight
          castShadow
          color={"#066e79"}
          //color={"blue"}
          position={[-10, 30, -10]}
          intensity={10}
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
          //color={"red"}
          //color={"#066e79"}
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
          intensity={5}
          color={"#066e79"}
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
          <Ground />
          <Model activePaso={activePaso} model={model} />
        </Suspense>
        <Environment map={"forest"} />
      </Canvas>
    </div>
  );
};
