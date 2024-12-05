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
      <div className="w-1/2 h-full flex flex-col items-center justify-start max-lg:hidden"></div>
      <div className="lg:w-1/2 xs:w-full h-full flex flex-col items-center justify-center video lg:px-10">
        <div className="w-full relative lg:min-h-96 max-lg:h-1/2 rounded-xl overflow-hidden aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full rounded-xl object-cover"
            src="/videos/invita-donar.mp4"
            controls={!isPlaying ? false : true}
          ></video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              onClick={handlePlayPause}
            >
              <img
                className="absolute object-cover"
                src="/imagenes/invita-donar.webp"
                alt=""
              />
              <img className="w-8 relative inline-block" src="/iconos/play.svg" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h1 className="titles font-Wayland mt-5 max-lg:text-center">
            DONA TIEMPO A UN ABUELITO EN NAVIDAD
          </h1>
          <p className="lg:text-start  mt-5 xs:text-center w-full">
            En Navidad, entregar es mejor que recibir, por eso nos unimos al
            ancianato de Facatativá para que puedas compartir con uno de sus
            abuelos a través de una visita o una videollamada.
          </p>
          <p className="lg:text-start  mt-5 xs:text-center w-full">
            A continuación, podrás agendar, cambiar o cancelar, tu visita o
            videollamada.
          </p>
          <div className="flex lg:items-start xs:items-center max-lg:justify-center max-lg:flex-col w-full lg:gap-10 xs:gap-8 mt-[2rem] lg:h-full caja">
            <button
              className="py-2 px-3.5  text-base HoverButtons max-lg:w-40"
              onClick={() => cambiarComponente("Preguntas")}
            >
              AGENDAR
            </button>
            <button className="py-2 px-3.5 max-lg:w-40 text-base HoverButtons">
              REAGENDAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalMatch;
