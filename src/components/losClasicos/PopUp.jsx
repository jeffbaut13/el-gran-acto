import { useRef } from "react";
import ReactPlayer from "react-player";

export const PopUp = ({ viejito, open }) => {
  const videoRef = useRef(null);
  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="w-[70%] text-start font-Wayland text-[2.838rem]">
          {viejito.nombre} / {viejito.role}
        </h2>
        <ReactPlayer
          className="video w-full h-full object-cover z-10 rounded-md"
          controls
          playing={open ? true : false} // Controla el estado de reproducción
          ref={videoRef}
          url={viejito.video}
          width="70%"
          height="fit-content"
        />
      </div>
    </div>
  );
};
