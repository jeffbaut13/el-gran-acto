import usePlayVideo from "../../store/StoreVideo";
import { links } from "../header/MenuLink";
import { VideoBackground } from "./VideoBackground";

export const SectionMain = () => {
  const { playVideo, play, closeVideo } = usePlayVideo();

  return (
    <main id={`${links[0]}`} className="w-full h-screen relative flex justify-between flex-col pb-12 pt-32 px-20 snap-item">
      <VideoBackground />
      <div className="w-full flexCenter flex-col">
        <div className="w-[42.1155rem]">
          <figure className="inline-block w-full">
            <img
              src="/iconos/el-gran-acto-logo.svg"
              alt="Logo el gran acto"
            />
          </figure>
        </div>

        <h1 className="tracking-[0.248em] text-sm mt-2">
          EN NAVIDAD, ENTREGAR ES MEJOR QUE RECIBIR.
        </h1>
      </div>
      <div className="w-full flexCenter">
        <figure onClick={play} className="cursor-pointer w-10">
          <img src="/iconos/play.svg" alt="Icono para reproducir video" />
        </figure>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <button className="text-[1.27rem] leading-3 py-2 px-8 HoverButtons bg-tercero">
            <span className="w-14 h-auto border-r border-second pr-3 mr-3">
              <img
                src="/iconos/audioIcon.svg"
                alt="Icono de reproducción de audio"
              />
            </span>
            <span className="flex flex-col">
              <span className="w-full leading-4 mt-2">
                ESCUCHA: <span className="">+ de 75</span>
              </span>
              <span className="font-StageGroteskRegular text-[0.4195rem] tracking-[0.248em]">
                EL GRAN EXITO DE “LOS CLÁSICOS”
              </span>
            </span>
          </button>
          <button className="leading-[1.1rem] text-[1.15rem] py-2 px-14 HoverButtons bg-tercero">
            DONA TIEMPO <br />A UN ABUELITO
          </button>
        </div>
        <div className="w-full flex items-center gap-4 mt-3  tracking-[0.1em] text-xs">
          DISPONIBLE EN:{" "}
          <span className="w-14 h-auto inline-block">
            <img src="/iconos/apple-music.svg" alt="Icono de apple music" />
          </span>
          <span className="w-14 h-auto inline-block">
            <img src="/iconos/spotify.svg" alt="Icono de spotify" />
          </span>
          <span className="w-14 h-auto inline-block">
            <img src="/iconos/deezer.svg" alt="Icono de Deezer" />
          </span>
        </div>
      </div>
    </main>
  );
};
