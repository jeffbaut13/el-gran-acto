import { useRef } from "react";
import { mobile, tablet } from "../../data/medidas";

export const VideoBackground = () => {
  const videoRef = useRef(null);

  const backgroundImage = "/imagenes/background.webp";
  const backgroundImageM = "/imagenes/backgroundM.webp";
  //const videoSrcMobile = "/videos/intro-vertical.mp4";
  const videoSrcMobile = "/videos/intro.mp4";
  const videoSrcDesktop = "/videos/intro.mp4";

  const isMobile = mobile || tablet;

  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="h-full w-full relative snap-item">
        {/* Fondo de la pantalla principal */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${
              isMobile ? backgroundImageM : backgroundImage
            })`,
          }}
        >
          <div className="absolute top-0 left-0 bg-black lg:bg-opacity-10 xs:bg-opacity-60 w-full h-full" />
          {/* <video
            ref={videoRef}
            className="video w-full h-full object-cover z-10"
            autoPlay
            muted
            loop
            //onLoadedData={() => (DijeValtio.readyVideo = true)}
            controls={false}
            playsInline
          >
            <source
              src={
                window.matchMedia("(max-width: 600px)").matches
                  ? videoSrcMobile
                  : videoSrcDesktop
              }
              type="video/mp4"
            />
          </video> */}
        </div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-second from-20% w-full h-40" />
      </div>
    </div>
  );
};
