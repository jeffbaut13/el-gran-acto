import { LogoLanding } from "../components/Landing/LogoLanding";
import { isMobile } from "../data/medidas";

export const ElgranActo = () => {
  const backgroundImage = "/imagenes/thankyou_page.webp";
  const backgroundImageM = "/imagenes/thankyou_pageM.webp";
  const links = [
    { titulo: "@losclasicos_co", icono: "tiktok" },
    { titulo: "losclasicos_co", icono: "instagram" },
  ];
  return (
    <main className="h-full w-full z-10 font-Alterenate">
      <div className="h-full w-full relative snap-item">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            className="object-cover"
            src={isMobile ? backgroundImageM : backgroundImage}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center lg:justify-around xs:justify-evenly w-full h-full z-10 relative">
          {/* Fondo de la pantalla principal */}
          <div className="titulo w-full flex flex-col gap-3 justify-center items-center">
            <h2 className="text-primary tracking-[0.4em] lg:text-2xl xs:text-3xl">
              VER EN VIVO
            </h2>
            <figure className="lg:w-[29.8rem] xs:w-[29rem]">
              <img src="/iconos/el-gran-acto-logo.svg" alt="Inter Day 2024" />
            </figure>
          </div>
          <div className="relative lg:w-[60%] xs:w-full aspect-video lg:mx-auto rounded-xl overflow-hidden">
            <iframe
              src="https://player.castr.com/live_5870a7504c2a11ef84592be722489aa0"
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
          <div className="flex justify-center gap-4 items-center w-[60%] max-lg:flex-col">
            {links.map((link, i) => (
              <div className="flex lg:gap-2 xs:gap-4 items-center">
                <span className="w-8 h-8 inline-block">
                  <img src={`/iconos/${link.icono}.svg`} alt={link.titulo} />
                </span>
                <span className="text-white tracking-[0.5em] my-6 text-2xl">
                  {link.titulo}
                </span>
              </div>
            ))}
          </div>
        </div>

       {/*  <div className="overlay absolute top-0 left-0 bg-black opacity-40 w-full h-full" /> */}
      </div>
    </main>
  );
};
