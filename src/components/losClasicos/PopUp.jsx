import { useRef } from "react";
import ReactPlayer from "react-player";
import { isMobile } from "../../data/medidas";

export const PopUp = ({ viejito, open }) => {
  const videoRef = useRef(null);
  return (
    <div className="w-full h-full lg:p-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="xs:w-[85%] lg:w-[70%] text-start font-Wayland lg:text-[2.838rem] xs:text-2xl">
          {viejito.nombre} / {viejito.role}
        </h2>
        <ReactPlayer
          className="video w-full h-full object-cover z-10 rounded-md"
          controls
          playing={open ? true : false} // Controla el estado de reproducción
          ref={videoRef}
          url={viejito.video}
          width={`${isMobile ? "85%" : "70%"}`}
          height="fit-content"
        />
      </div>
    </div>
  );
};
