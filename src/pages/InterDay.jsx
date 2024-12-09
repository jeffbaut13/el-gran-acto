import { VideoEmbed } from "../components/InterDay/VideoEmbed";

export const InterDay = () => {
  const links = [
    { titulo: "@interrapidisimo_co", icono: "tiktokWhite" },
    { titulo: "interrapidisimo_co", icono: "InstagramWhite" },
    { titulo: "facebook.com/interrapidisimo", icono: "facebookWhite" },
  ];

  return (
    <div
      className="bg-white w-full h-screen font-Fontfabric flex flex-col lg:justify-between xs:justify-center max-lg:gap-24 items-center py-6"
      style={{ backgroundImage: "url(/imagenes/interday.webp)" }}
    >
      <div className="titulo w-full flex flex-col gap-3 justify-center items-center">
        <figure className="lg:w-[29.8rem] xs:w-[20rem]">
          <img src="/iconos/interdayIcon.svg" alt="Inter Day 2024" />
        </figure>
        <h2 className="text-white tracking-[0.4em] lg:text-xs xs:text-[0.52rem]">
          NUESTRAS ENTREGAS MERECEN SER CELEBRADAS
        </h2>
      </div>
      <div className="relative lg:w-[60%] xs:w-full aspect-video lg:m-auto">
        <VideoEmbed />
      </div>
      <div className="flex justify-between max-lg:gap-6 items-center w-[60%] max-lg:flex-col">
        {links.map((link, i) => (
          <div className="flex lg:gap-2 xs:gap-4 items-center">
            <span className="w-8 h-8 inline-block">
              <img src={`/iconos/${link.icono}.svg`} alt={link.titulo} />
            </span>
            <span className="text-white tracking-[0.4em] my-6 text-xs">
              {link.titulo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
