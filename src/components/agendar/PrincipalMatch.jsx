import React, { useRef, useState } from "react";

const PrincipalMatch = ({ cambiarComponente }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-start"></div>
      <div className="w-full h-full flex flex-col items-center justify-center video px-5">
        <div className="relative w-[35rem] h-[180rem] rounded-xl overflow-hidden bg-white">
          <video
            ref={videoRef}
            className="w-full h-full rounded-xl"
            src="your-video-file.mp4"
          ></video>
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              onClick={handlePlayPause}
            >
              <img className="w-8" src="/iconos/play.svg" />
            </div>
          )}
        </div>

        <h1 className="text-[4.38rem] leading-[4rem] pb-5 font-Wayland mt-5">
          DONA TIEMPO
          <br /> A UN ABUELITO EN NAVIDAD
        </h1>
        <p className="text-start  mt-5">
          En Navidad, entregar es mejor que recibir, por eso nos unimos al
          ancianato de Facatativá para que puedas compartir con uno de sus
          abuelos a través de una visita o una videollamada.
        </p>
        <p className="text-start  mt-5 w-full">
          A continuación, podrás agendar, cambiar o cancelar, tu visita o
          videollamada.
        </p>
        <div className="flex items-start w-full gap-10 mt-[2rem] h-full caja">
          <button
            className="button_large text-[1rem]"
            onClick={() => cambiarComponente("Preguntas")}
          >
            AGENDAR
          </button>
          <button className="button_large">REAGENDAR</button>
        </div>
      </div>
    </>
  );
};

export default PrincipalMatch;
