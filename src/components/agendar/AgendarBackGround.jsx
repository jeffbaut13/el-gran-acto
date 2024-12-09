import { useRef } from "react";
import { isMobile } from "../../data/medidas";

export const AgendarBackGround = () => {
  const videoRef = useRef(null);

  const backgroundImage = "/imagenes/backNuevoAgendar.webp";
  //const videoSrcMobile = "/videos/intro-vertical.mp4";

  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="h-full w-full relative  ">
        {/* Fondo de la pantalla principal */}
        {!isMobile && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute top-0 left-0 bg-gradient-to-b from-second from-20% w-full h-40" />
          </div>
        )}
      </div>
    </div>
  );
};
