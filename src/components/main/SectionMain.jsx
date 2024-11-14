import useCounterStore from "../../store/store";
import { VideoBackground } from "./VideoBackground";

export const SectionMain = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <main className="w-full h-screen relative flex justify-between flex-col pb-12 pt-32 px-20 snap-item">
      <VideoBackground />
      <div className="w-full flexCenter flex-col">
        <div className="w-[47.71rem]">
          <figure className="inline-block w-full">
            <img
              src="/imagenes/el-gran-acto-logo.webp"
              alt="Logo el gran acto"
            />
          </figure>
        </div>

        <h1 className="tracking-[0.15em] text-sm mt-2">
          <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
        </h1>
      </div>
      <div className="w-full flexCenter">
        <figure className="w-10">
          <img src="/iconos/play.svg" alt="Icono para reproducir video" />
        </figure>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <button className="text-[1.27rem] leading-3 py-1.5 px-6 HoverButtons">
            <span className="w-14 h-auto border-r border-second pr-3 mr-3">
              <img
                src="/iconos/audioIcon.svg"
                alt="Icono de reproducción de audio"
              />
            </span>
            <span className="flex flex-col">
              <span className="w-full leading-4 mt-2">
                ESCUCHA: <span className="font-Bebas">+ de 75</span>
              </span>
              <span className="w-full text-end font-StageGroteskRegular text-[0.4rem] tracking-[0.3em]">
                EL GRAN EXITO DE “LOS CLÁSICOS”
              </span>
            </span>
          </button>
          <button className="leading-[1.3rem] text-[1.27rem] py-1.5 px-10 HoverButtons">
            DONA TU TIEMPO <br /> A UN ABUELITO EN NAVIDAD
          </button>
        </div>
        <div className="w-full flex items-center gap-3 mt-3  tracking-[0.1em] text-xs">
          DISPONIBLE EN:{" "}
          <span className="w-12 h-auto inline-block">
            <img src="/iconos/apple-music.svg" alt="Icono de apple music" />
          </span>
          <span className="w-12 h-auto inline-block">
            <img src="/iconos/spotify.svg" alt="Icono de spotify" />
          </span>
          <span className="w-12 h-auto inline-block">
            <img src="/iconos/deezer.svg" alt="Icono de Deezer" />
          </span>
        </div>
      </div>
    </main>
  );
};
