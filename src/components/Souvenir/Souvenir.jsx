import gsap from "gsap";
import { links } from "../header/MenuLink";
import { Canva } from "./Canva";
import { useEffect, useRef, useState } from "react";
import "./canva.css";
import { PasosComponentes } from "./PasosComponentes";
import useAudioStore from "../../store/audioStore";
import { isMobile } from "../../data/medidas";
import { Loading } from "../helpers/Loading";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../helpers/Arrow";

export const Souvenir = ({ reff }) => {
  const model = useRef(null);
  const audioRef = useRef(null);
  const pasos = ["DEDICADO A", "SUBE TU FOTO", "TU REGALO"];
  const [activePaso, setActivePaso] = useState(0);
  const [audio, setAudio] = useState(false);
  const controlsRef = useRef(null);
  const [isControlsReady, setControlsReady] = useState(false);
  const navigate = useNavigate();
  const { combinedAudioUrl, isAudioReady } = useAudioStore();

  // Configuración de puntos de interés dinámicos
  const cameraTargets = [
    {
      position: {
        x: isMobile ? 0.5 : 0.1,
        y: 1,
        z: isMobile ? 3 : 2,
      },
      target: {
        x: isMobile ? -0.1 : 3.2,
        y: isMobile ? -1 : -2,
        z: isMobile ? 0 : -5,
      },
      zoom: 1,
    },
    {
      position: {
        x: isMobile ? -1.3 : -1.7,
        y: isMobile ? 0.8 : 0.8,
        z: isMobile ? 1.4 : 2,
      },
      target: {
        x: isMobile ? 0.15 : 0.6,
        y: isMobile ? 0.6 : 1,
        z: isMobile ? -0.5 : 0,
      },
      zoom: isMobile ? 2 : 4,
    },
    {
      position: {
        x: isMobile ? 0.5 : 0.1,
        y: 1,
        z: isMobile ? 3 : 2,
      },
      target: {
        x: isMobile ? -0.1 : 3.2,
        y: isMobile ? -0.6 : -2,
        z: isMobile ? 0 : -5,
      },
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

      gsap.to(camera.position, {
        x: isMobile ? 0.5 : 0.1,
        y: 1,
        z: isMobile ? 3 : 2,
        duration: 2,
        onUpdate: () => controls.update(),
      });

      gsap.to(controls.target, {
        x: isMobile ? -0.1 : 3.2,
        y: isMobile ? -1 : -2,
        z: isMobile ? 0 : -5,
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
    <section className="w-full h-screen snap-item relative bg-black select-none max-lg:flex max-lg:justify-start max-lg:flex-col-reverse max-lg:pb-24 max-lg:px-4">
      <span
        onClick={() => navigate("/")}
        className="fixed left-12 top-6 flex items-center justify-center gap-2 z-50 cursor-pointer"
      >
        <span className="w-6 h-6 rotate-180 inline-block">
          <Arrow />
        </span>
        Atras
      </span>
      <Canva
        cameraControlRef={controlsRef}
        activePaso={activePaso}
        model={model}
        isAudioReady={isAudioReady}
        audioRef={audioRef}
      />
      <div className="lg:absolute xs:relative lg:bottom-16 left-1/2 -translate-x-1/2 z-30 h-4 xs:w-[65%] lg:w-1/3 inline-block">
        <div className="flex w-full justify-between relative">
          {isMobile && (
            <span className="lg:w-4 xs:w-7 lg:h-4 xs:h-7 ml-4 rotate-180">
              {activePaso >= 1 && (
                <span
                  onClick={() => handleButtonClick(activePaso - 1)}
                  className="w-full h-full"
                >
                  <Arrow />
                </span>
              )}
            </span>
          )}

          {pasos.map((paso, i) => (
            <div
              onClick={() => handleButtonClick(i)}
              key={i}
              className="line cursor-pointer rounded-full lg:w-4 xs:w-7 lg:h-4 xs:h-7 inline-block border border-primary relative"
            >
              <span
                className={`rounded-full ${
                  activePaso >= i ? "bg-primary" : "bg-none"
                }  lg:h-2 xs:h-5 inline-block lg:w-2 xs:w-5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ease-in-out transition-all duration-1000`}
              />
              <span className="font-StageGroteskBold absolute whitespace-nowrap -bottom-8 -left-[250%] max-lg:hidden">
                {paso}
              </span>
            </div>
          ))}

          {isMobile && (
            <span className="lg:w-4 xs:w-7 lg:h-4 xs:h-7 ml-4">
              {activePaso <= 1 && (
                <span
                  onClick={() => handleButtonClick(activePaso + 1)}
                  className="w-full h-full"
                >
                  <Arrow />
                </span>
              )}
            </span>
          )}
        </div>
      </div>
      <div className="lg:w-[50vw] xs:w-full lg:h-full z-20 flex items-center lg:absolute xs:relative right-0 max-lg:my-10 max-lg:bg-black max-lg:bg-opacity-20 max-lg:backdrop-blur-sm max-lg:rounded-xl max-lg:pt-4">
        <PasosComponentes
          activePaso={activePaso}
          setActivePaso={setActivePaso}
          setAudio={setAudio}
          audio={audio}
          handleButtonClick={handleButtonClick}
        />
      </div>

      {audio && activePaso >= 0 && (
        <div className="lg:absolute xs:relative lg:bottom-36 lg:left-[22%] xs:left-1/2 max-lg:-translate-x-1/2 w-fit h-fit z-50 inline-block">
          {!isAudioReady ? (
            <Loading texto={"Cargando dedicatoria"} />
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
