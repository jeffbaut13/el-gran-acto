import usePlayVideo from "../../store/StoreVideo";
import { links } from "../header/MenuLink";
import { BotonMusic } from "../helpers/BotonMusic";
import { IconPlay } from "../helpers/IconPlay";
import { VideoBackground } from "./VideoBackground";

export const SectionMain = ({ reff }) => {
  const { playVideo, play, closeVideo } = usePlayVideo();

  return (
    <main
      ref={reff}
      id={`${links[0]}`}
      className="w-full h-screen relative flex justify-evenly max-lg:flex-col items-end pb-24 p-responsive snap-item"
    >
      <div className="lg:hidden lg:h-1/3"/>
      <VideoBackground />
      <div className="w-full flex lg:justify-start xs:justify-center flex-col">
        <div className="lg:w-[30rem] xs:w-full">
          <figure className="inline-block w-full">
            <img src="/iconos/el-gran-acto-logo.svg" alt="Logo el gran acto" />
          </figure>
        </div>

        <h1 className="tracking-[0.248em] text-sm my-4 max-lg:text-center">
          <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
        </h1>
        <div className="flex lg:justify-start xs:justify-center ">
          <button
            onClick={play}
            className="group text-[1rem] leading-3 HoverButtons py-2.5"
          >
            <span className="w-6 h-auto ml-3.5">
              <IconPlay customStyle={true} />
            </span>
            <span className="flex flex-col mx-3.5">
              <span className="w-full leading-4">VER AHORA</span>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full flex max-lg:flex-col justify-end lg:gap-3 xs:gap-6">
        <div className="flex flex-col lg:items-start xs:items-center justify-center">
          <BotonMusic />
        </div>
        <div className="flex flex-col items-center">
          <button className="leading-[1.1rem] text-[1.15rem] py-1 px-14 HoverButtons">
            DONA TIEMPO <br />A UN ABUELITO
          </button>
        </div>
      </div>
    </main>
  );
};
