import useCounterStore from "../../store/store";
import { VideoBackground } from "./VideoBackground";

export const SectionMain = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <main className="w-full h-screen relative flex justify-between flex-col py-12 px-20">
      <VideoBackground />
      <div className="w-full flexCenter flex-col">
        <div className="w-[25.5rem]">
          <figure className="inline-block w-full">
            <img src="/iconos/logo.svg" alt="" />
          </figure>
          <hr className="w-full my-6" />
        </div>

        <h1 className="tracking-[0.15em] text-sm">
          <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
        </h1>
      </div>
      <div className="w-full flexCenter">
        <figure className="w-10">
          <img src="/iconos/play.svg" alt="" />
        </figure>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <button className="text-button py-3.5 px-6 HoverButtons">
            <span className="w-14 h-auto border-r border-second pr-3 mr-3">
              <img src="/iconos/audioIcon.svg" alt="" />
            </span>
            <span className="flex flex-col">
              <span className="w-full leading-4 mt-2">
                ESCUCHA YO NO ME OLVIDO DE TI
              </span>
              <span className="w-full text-end font-StageGroteskRegular text-[0.5rem] tracking-[0.3em]">
                LA CANCIÓN
              </span>
            </span>
          </button>
          <button className="leading-[1.3rem] text-button py-3.5 px-10 HoverButtons">
            DONA TU TIEMPO <br /> A UN ABUELITO EN NAVIDAD
          </button>
        </div>
        <div className="w-full flex items-center gap-6 mt-3  tracking-[0.1em]">
          DISPONIBLE EN:{" "}
          <span className="w-16 h-auto inline-block">
            <img src="/iconos/apple-music.svg" alt="" />
          </span>
          <span className="w-16 h-auto inline-block">
            <img src="/iconos/spotify.svg" alt="" />
          </span>
          <span className="w-16 h-auto inline-block">
            <img src="/iconos/deezer.svg" alt="" />
          </span>
        </div>
      </div>
    </main>
  );
};
