import { links } from "../header/MenuLink";

export const MakingOf = ({ reff }) => {
  const backgroundImage = "/imagenes/DETRAS-DE-CAMARAS.webp";
  return (
    <section
      ref={reff}
      id={`${links[6]}`}
      className="h-screen w-full flex flex-col justify-center items-center snap-item relative px-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="w-full h-full bg-gradient-to-r from-[#000f0d] to-60% absolute left-0 top-0" /> */}
      <div className="w-full z-10 relative flex">
        <div className="w-2/5 pl-20">
          <h2 className="text-[4.38rem] leading-[4rem] font-Wayland ">
            DETRÁS DE <br />
            CÁMARAS
          </h2>

          <h3 className="tracking-[0.15em] text-sm text-start my-4">
            Mira los mejores momentos de esta nueva <br /> entrega de Inter
            Rapidísimo.
          </h3>

          <button className="px-7 py-2 text-[1rem] HoverButtons">VER</button>
        </div>
        <div className="w-1/2" />
      </div>
    </section>
  );
};
