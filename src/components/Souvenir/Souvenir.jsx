import gsap from "gsap";
import { links } from "../header/MenuLink";
import { Canva } from "./Canva";
import { useEffect, useRef, useState } from "react";

export const Souvenir = ({ reff }) => {
  const controlsRef = useRef(null);
  const [isControlsReady, setControlsReady] = useState(false);

  // Marcar los controles como listos
  useEffect(() => {
    const interval = setInterval(() => {
      if (controlsRef.current) {
        setControlsReady(true); // Marcar controles como listos
        clearInterval(interval); // Detener el chequeo
      }
    }, 100); // Verificar cada 100ms

    return () => clearInterval(interval); // Limpiar al desmontar
  }, []);

  // Ejecutar la animación cuando los controles estén listos
  useEffect(() => {
    if (isControlsReady && controlsRef.current) {
      const controls = controlsRef.current;
      const { object: camera } = controls; // Acceder a la cámara desde OrbitControls

      // Animación de la posición de la cámara
      gsap.to(camera.position, {
        x: 1.3,
        y: 1.2,
        z: 2,
        duration: 2,
        onUpdate: () => {
          controls.update(); // Actualizar la posición
        },
      });

      // Animación del punto de enfoque
      gsap.to(controls.target, {
        x: 1.3,
        y: 0,
        z: -4,
        duration: 2,
        onUpdate: () => {
          controls.update(); // Actualizar el enfoque
        },
      });
    }
  }, [isControlsReady]); // Ejecutar cuando `isControlsReady` cambie

  return (
    <section
      ref={reff}
      id={`${links[4]}`}
      className="w-full h-screen snap-item relative bg-black"
    >
      <Canva cameraControlRef={controlsRef} />
      <div className="absolute w-full h-full z-10 top-0 left-0 flex items-center">
        <div className="w-1/2"></div>
        <div className="w-1/2 pl-20">
          <h2 className="font-Wayland text-[4.38rem] leading-[4rem]">
            UN REGALO <br />
            INOLVIDABLE
          </h2>
          <p className="py-6">
            Creamos este cuadro que podrás personalizar con <br /> la mejor foto de esa
            persona que tanto quieres y <br /> una dedicatoria única para que ese <br />
            abuelo, ese padre o esos hijos, jamás se olviden de ti.
          </p>
          <button className="px-7 py-1.5 text-[1.46rem]">PERSONALIZAR</button>
        </div>
      </div>
    </section>
  );
};
