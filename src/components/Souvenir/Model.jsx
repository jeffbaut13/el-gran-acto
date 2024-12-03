import React, { useEffect, useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function Model({ activePaso, model }) {
  const Tapa = useRef(null);

  useEffect(() => {
    const tapa = Tapa.current;

    if (activePaso == 1 || activePaso == 2 || activePaso == 3) {
      if (tapa) {
        // Animación de rotación en el eje Y
        gsap.to(tapa.rotation, {
          x: Math.PI * -0.5, // Rota 360 grados (2π radianes)
          duration: 0.5, // Duración de 2 segundos
          ease: "power1.inOut",
        });
      }
    } else {
      if (tapa) {
        // Animación de rotación en el eje Y
        gsap.to(tapa.rotation, {
          x: Math.PI * 0, // Rota 360 grados (2π radianes)
          duration: 0.5, // Duración de 2 segundos
          ease: "power1.inOut",
        });
      }
    }
  }, [activePaso]);

  const { nodes, materials } = useGLTF("/models/carrito.glb");
  return (
    <group ref={model} scale={1.5} dispose={null} rotation={[0, -0.5, 0]}>
      <group name="estructura" position={[0.166, 0.458, -0.004]} scale={7.459}>
        <mesh
          name="Mesh_11001"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001.geometry}
          material={materials["Burned Wood.003"]}
        />
        <mesh
          name="Mesh_11001_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_1.geometry}
          material={materials["Blue Wood.003"]}
        />
        <mesh
          name="Mesh_11001_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_2.geometry}
          material={materials["W Painted.003"]}
        />
        <mesh
          name="Mesh_11001_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_3.geometry}
          material={materials["Plastic.003"]}
        />
        <mesh
          name="Mesh_11001_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_4.geometry}
          material={materials["G Painted.003"]}
        />
        <mesh
          name="Mesh_11001_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_5.geometry}
          material={materials["B Painted.003"]}
        />
        <mesh
          name="Mesh_11001_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_6.geometry}
          material={materials["Burned Wood.005"]}
        />
        <mesh
          name="Mesh_11001_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11001_7.geometry}
          material={materials["Blue Wood.005"]}
        />
      </group>
      <group name="Llantas" position={[-0.312, 0.068, 0.219]} scale={7.459}>
        <mesh
          name="Mesh_1104001"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1104001.geometry}
          material={materials["Burned Wood.003"]}
        />
        <mesh
          name="Mesh_1104001_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1104001_1.geometry}
          material={materials["Rubber.003"]}
        />
        <mesh
          name="Mesh_1104001_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1104001_2.geometry}
          material={materials["Steel.003"]}
        />
        <mesh
          name="Mesh_1104001_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1104001_3.geometry}
          material={materials["Plastic.003"]}
        />
      </group>
      <mesh
        name="caja-musical"
        castShadow
        receiveShadow
        geometry={nodes["caja-musical"].geometry}
        material={materials["Plastic.003"]}
        position={[-0.034, 0.212, -0.014]}
        scale={7.459}
      />
      <mesh
        onClick={() => alert("hola")}
        name="Boton"
        castShadow
        receiveShadow
        geometry={nodes.Boton.geometry}
        material={materials["W Painted.003"]}
        position={[-0.034, 0.212, -0.014]}
        scale={7.459}
      />
      {activePaso == 1 && (
        <RingEffect position={[-0.165, 0.265, -0.124]} scale={0.04} />
      )}
      <group
        ref={Tapa}
        name="Tapa"
        position={[-0.026, 0.47, -0.162]}
        rotation={[0.003, 0, 0]}
        scale={[7.993, 7.793, 8.028]}
      >
        <mesh
          name="Mesh_11002"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11002.geometry}
          material={materials["Burned Wood.003"]}
        />
        <mesh
          name="Mesh_11002_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11002_1.geometry}
          material={materials["foto_cuchos (1).003"]}
        />
        <mesh
          name="Mesh_11002_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_11002_2.geometry}
          material={materials["Blue Wood.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/carrito.glb");

const RingEffect = ({ position, scale }) => {
  const rings = useRef([]);

  // Animar los anillos al montarse
  useEffect(() => {
    rings.current.forEach((ring, i) => {
      gsap.to(ring.scale, {
        x: scale + i * 0.005,
        y: scale + i * 0.005,
        z: scale + i * 0.005,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, [scale]);

  return (
    <>
      {[0, 1, 2].map((i) => (
        <mesh
          scale={0.00001}
          key={i}
          ref={(el) => (rings.current[i] = el)}
          position={position}
          rotation={[-Math.PI / 2, 0, 0]} // Asegura que los anillos estén planos
        >
          <ringGeometry args={[0.5 + i * 0.2, 0.7 + i * 0.2, 64]} />
          <meshBasicMaterial color="#e9e2b4" transparent opacity={0.5} />
        </mesh>
      ))}
    </>
  );
};
