import { videos } from "../../data/Videos";
import usePlayVideo from "../../store/StoreVideo";
import { links } from "../header/MenuLink";

export const MakingOf = ({ reff, seturlVideoState }) => {
  const backgroundImage = "/imagenes/DETRAS-DE-CAMARAS.webp";

  const { playVideo, play, closeVideo } = usePlayVideo();

  const handleVideoPopUp = () => {
    seturlVideoState(videos.resumen);

    play();
  };

  return (
    <section
      ref={reff}
      id={`${links[6]}`}
      className="h-screen w-full flex flex-col justify-center items-center snap-item relative p-responsive"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="w-full h-full bg-gradient-to-r from-[#000f0d] to-60% absolute left-0 top-0" /> */}
      <div className="w-full z-10 relative flex ">
        <div className="lg:w-2/5 xs:w-full lg:pl-20">
          <h2 className="lg:text-[4.38rem] lg:leading-[4rem] xs:text-[5rem] leading-[4.5rem] font-Wayland lg:text-start xs:text-center">
            DETRÁS DE <br />
            CÁMARAS
          </h2>

          <p className="tracking-[0.15em] lg:text-start xs:text-center my-4 w-full">
            Mira los mejores momentos de esta <br className="lg:hidden" />
            nueva <br className="max-lg:hidden" /> entrega de Inter Rapidísimo.
          </p>

          <button
            onClick={handleVideoPopUp}
            className="lg:px-7 xs:px-14 py-2 text-base HoverButtons max-lg:m-auto"
          >
            VER
          </button>
        </div>
        <div className="w-1/2 max-lg:hidden" />
      </div>
    </section>
  );
};
