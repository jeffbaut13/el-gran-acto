import { useRef } from "react";

export const VideoBackground = () => {
  const videoRef = useRef(null);

  const backgroundImage = "/imagenes/background.jpg";
  //const videoSrcMobile = "/videos/intro-vertical.mp4";
  const videoSrcMobile = "/videos/intro.mp4";
  const videoSrcDesktop = "/videos/intro.mp4";

  return (
    <div className="absolute top-0 left-0 h-full w-full -z-10">
      <div className="h-full w-full relative snap-item">
   
        {/* Fondo de la pantalla principal */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute top-0 left-0 bg-black bg-opacity-55 w-full h-full" />
          <video
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
          </video>
        </div>
      </div>
    </div>
  );
};
