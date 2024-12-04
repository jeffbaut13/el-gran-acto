import gsap from "gsap";
import { links } from "../header/MenuLink";
import { Canva } from "./Canva";
import { useEffect, useRef, useState } from "react";
import "./canva.css";
import { PasosComponentes } from "./PasosComponentes";
import useAudioStore from "../../store/audioStore";
import { isMobile } from "../../data/medidas";
import { Loading } from "../helpers/Loading";

export const Souvenir = ({ reff }) => {
  const model = useRef(null);
  const audioRef = useRef(null);
  const pasos = ["PERSONALIZAR", "DEDICADO A", "SUBE TU FOTO", "TU REGALO"];
  const [activePaso, setActivePaso] = useState(0);
  const [audio, setAudio] = useState(false);
  const controlsRef = useRef(null);
  const [isControlsReady, setControlsReady] = useState(false);

  const { combinedAudioUrl, isAudioReady } = useAudioStore();

  console.log(isMobile);
  // Configuración de puntos de interés dinámicos
  const cameraTargets = [
    {
      position: { x: isMobile ? 0.5 : 0.8, y: 0.5, z: isMobile ? 3 : 2 },
      target: { x: isMobile ? -0.1 : 1.5, y: -0.2, z: isMobile ? 0 : -4 },
      zoom: 1,
    },
    {
      position: {
        x: isMobile ? 0.5 : 0,
        y: 2.4,
        z: isMobile ? 3 : 2,
      },
      target: {
        x: isMobile ? -0.1 : 3.7,
        y: isMobile ? -1.2 : -5.5,
        z: isMobile ? 0 : -3.5,
      },
      zoom: 1.5,
    },
    {
      position: {
        x: isMobile ? -1 : -0.2,
        y: isMobile ? 0.8 : 1,
        z: isMobile ? 1.4 : 1.3,
      },
      target: {
        x: isMobile ? 0 : 6,
        y: isMobile ? 0 : -0.3,
        z: isMobile ? -0.3 : -5,
      },
      zoom: 1,
    },
    {
      position: { x: isMobile ? 0.5 : 0.8, y: 0.5, z: isMobile ? 3 : 2 },
      target: { x: isMobile ? -0.1 : 1.5, y: -0.2, z: isMobile ? 0 : -4 },
      zoom: 1,
    },
  ];

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

  // Animación inicial de la cámara cuando los controles están listos
  useEffect(() => {
    if (isControlsReady && controlsRef.current && activePaso == 0) {
      const controls = controlsRef.current;
      const { object: camera } = controls;

      /* gsap.to(camera.position, {
        x: -1,
        y: 0.8,
        z: 1.4,
        duration: 2,
        onUpdate: () => controls.update(),
      });

      gsap.to(controls.target, {
        x: 0,
        y: 0,
        z: -0.3,
        duration: 2,
        onUpdate: () => controls.update(),
      }); */
      gsap.to(camera.position, {
        x: isMobile ? 0.5 : 0.8,
        y: 0.5,
        z: isMobile ? 3 : 2,
        duration: 2,
        onUpdate: () => controls.update(),
      });

      gsap.to(controls.target, {
        x: isMobile ? -0.1 : 1.5,
        y: -0.2,
        z: isMobile ? 0 : -4,
        duration: 2,
        onUpdate: () => controls.update(),
      });
    }
  }, [isControlsReady]);

  // Animar la cámara hacia un punto específico
  const handleButtonClick = (partKey) => {
    setActivePaso(partKey);
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const { position, target, zoom } = cameraTargets[partKey];

      // Animar la posición de la cámara
      gsap.to(controls.object.position, {
        ...position,
        duration: 1.5,
        onUpdate: () => controls.update(),
      });

      // Animar el punto de enfoque (target)
      gsap.to(controls.target, {
        ...target,
        duration: 1.5,
        onUpdate: () => controls.update(),
      });

      // Animar el zoom
      gsap.to(controls.object, {
        zoom,
        duration: 1.5,
        onUpdate: () => {
          controls.object.updateProjectionMatrix();
          controls.update();
        },
      });
    }
  };

  return (
    <section
      ref={reff}
      id={`${links[4]}`}
      className="w-full h-screen snap-item relative bg-black select-none max-lg:flex max-lg:justify-start max-lg:flex-col-reverse max-lg:pb-44"
    >
      <Canva
        cameraControlRef={controlsRef}
        activePaso={activePaso}
        model={model}
        isAudioReady={isAudioReady}
        audioRef={audioRef}
      />
      <div className="lg:absolute xs:relative lg:bottom-16 left-1/2 -translate-x-1/2 z-30 h-4 w-1/2 inline-block">
        <div className="flex w-full justify-between relative">
          {pasos.map((paso, i) => (
            <div
              onClick={() => handleButtonClick(i)}
              key={i}
              className="line cursor-pointer rounded-full w-4 h-4 inline-block border border-primary relative"
            >
              <span
                className={`rounded-full ${
                  activePaso >= i ? "bg-primary" : "bg-none"
                }  h-2 inline-block w-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ease-in-out transition-all duration-1000`}
              />
              <span className="font-StageGroteskBold absolute whitespace-nowrap -bottom-8 -left-[250%] max-lg:hidden">
                {paso}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[50vw] xs:w-full lg:h-full z-20 flex items-center lg:absolute xs:relative right-0 max-lg:my-12">
        <PasosComponentes
          activePaso={activePaso}
          setActivePaso={setActivePaso}
          setAudio={setAudio}
          audio={audio}
          handleButtonClick={handleButtonClick}
        />
      </div>
      
      {audio && activePaso == 1 && (
        <div className="lg:absolute xs:relative lg:bottom-36 lg:left-[22%] xs:left-1/2 max-lg:-translate-x-1/2 w-fit h-fit z-50 inline-block">
          {!isAudioReady ? (
            <Loading  texto={"Cargando dedicatoria"}/>
          ) : (
            <>
              <audio ref={audioRef} controls>
                <source src={combinedAudioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </>
          )}
        </div>
      )}
      
    </section>
  );
};
