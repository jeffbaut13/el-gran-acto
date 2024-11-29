import { useEffect, useRef, useState } from "react";
import { mobile, tablet } from "../../data/medidas";
import gsap from "gsap";
import { FormEvent } from "./FormEvent";
import getBoletasCount from "../../firebase/boletas";
import { LogoLanding } from "./LogoLanding";
import { BotonMusic } from "../helpers/BotonMusic";
import { Socials } from "../helpers/Socials";
import { Link } from "react-router-dom";
import { IconPlay } from "../helpers/IconPlay";

export const Landing = () => {
  const [openForm, setopenForm] = useState(false);
  const [boletas, setBoletas] = useState(null);

  const sociales = [
    {
      icon: "instagram",
      url: "https://www.instagram.com/interrapidisimo_co/",
    },
    {
      icon: "tiktok",
      url: "https://www.tiktok.com/discover/interrapidisimo",
    },
    {
      icon: "youtube",
      url: "https://www.youtube.com/@interrapidisimo4868",
    },
  ];
  const backgroundImage = "/imagenes/LANDING-EL-GRAN-FESTIVAL.webp";
  const backgroundImageM = "/imagenes/LANDING-EL-GRAN-FESTIVALM.webp";

  const isMobile = mobile || tablet;

  useEffect(() => {
    const fetchBoletasCount = async () => {
      const count = await getBoletasCount(); // Espera el valor
      setBoletas(count); // Actualiza el estado con el número de documentos
    };

    fetchBoletasCount();
  }, []);

  useEffect(() => {
    if (openForm) {
      gsap.to(".overlay", {
        css: {
          "--tw-bg-opacity": "0.8",
        },
        ease: "power1.inOut",
        duration: 0.2,
      });
    } else {
      gsap.to(".overlay", {
        css: {
          "--tw-bg-opacity": "0.35",
        },
        ease: "power1.inOut",
        duration: 0.2,
      });
    }
  }, [openForm]);

  return (
    <main className="h-full w-full z-10 font-Alterenate">
      <div className="h-full w-full relative snap-item">
        {/* Fondo de la pantalla principal */}

        {boletas <= 1 ? (
          <>
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img
                className="object-cover"
                src={isMobile ? backgroundImageM : backgroundImage}
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full z-10 relative">
              {openForm ? (
                <FormEvent />
              ) : (
                <>
                  <LogoLanding
                    text={"jueves 5 de diciembre 2024 / teatro colón, Bogotá"}
                    customStyle={"lg:text-[1.5rem] xs:text-base"}
                  />
                  <h1 className="mt-10">
                    <span className="tracking-[0.1em] lg:text-[4.85rem] lg:leading-[4rem] xs:text-7xl">
                      LOS CLÁSICOS
                    </span>
                    <br />
                    <span className="tracking-[0.12em] flex items-center gap-4 lg:text-[2.8rem] leading-[2rem] xs:text-[2.6rem]">
                      <span>SANTIAGO CRUZ</span>
                      <span className="w-2 h-2 inline-block bg-primary rounded-full relative " />
                      <span>GUSI</span>
                    </span>
                    <span className="tracking-[0.095em] lg:text-[2.53rem] leading-[2.4rem] xs:text-[2.36rem]">
                      MAURICIO Y PALO DE AGUA
                    </span>
                  </h1>
                  <div className="mt-52 z-10 relative lg:translate-y-14 xs:translate-y-36">
                    <button
                      onClick={() => setopenForm(true)}
                      className="px-7 py-2 HoverButtons bg-black bg-opacity-35 lg:text-[1.1rem] xs:text-xl"
                    >
                      REGÍSTRATE
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img
                className="object-cover"
                src={
                  isMobile
                    ? "/imagenes/thankyou_pageM.webp"
                    : "/imagenes/thankyou_page.webp"
                }
                alt=""
              />
            </div>
            <div className="flex flex-col items-center lg:justify-between xs:justify-around w-full h-full z-10 relative lg:py-12">
              <LogoLanding
                text={"HA LLENADO EL TEATRO COLÓN"}
                customStyle={"lg:text-[2.35rem] xs:text-[1.6rem]"}
              />
              <div className="lg:w-[38rem] xs:w-5/6 h-[14.9rem] flexCenter flex-col rounded-xl justify-center mt-36">
                <div className="lg:w-[57.1%] xs:w-5/6">
                  <p className="w-full font-StageGroteskLigth lg:text-start xs:text-center mb-4 lg:text-[0.89rem] leading-[1.2rem] xs:text-base">
                    Buenas, estamos muy agradecidos con todos los que{" "}
                    <br className="max-lg:hidden" /> nos han dado su apoyo,
                    gracias a Dios ya 
                    llenamos <br className="max-lg:hidden" />nuestro concierto.
                  </p>
                  <p className="w-full font-StageGroteskLigth lg:text-start xs:text-center mb-8 lg:text-[0.89rem] leading-[1.2rem] xs:text-base">
                    Síguenos en nuestras cuentas para que{" "}
                    <br className="max-lg:hidden" /> no te pierdas nada de lo
                    que estamos haciendo.
                  </p>
                </div>
                <div className="flex gap-4 justify-between lg:w-[57.1%] xs:w-5/6">
                  {sociales.map((soc, i) => (
                    <Link
                      key={i}
                      to={soc.url ? soc.url : "/"}
                      target="_blank"
                      className="group font-Wayland border border-primary text-primary hover:bg-primary hover:text-second flexCenter rounded-lg w-full py-1 HoverButtons"
                    >
                      <span className="w-6">
                        <img
                          className="group-hover:invert transition-all ease-in-out duration-700"
                          src={`/iconos/${soc.icon}.svg`}
                          alt={`${soc.icon}`}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="lg:w-[57.1%] xs:w-5/6">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.youtube.com/watch?v=77_C-xjRY8o")
                    }
                    className="group text-[1.15rem] leading-3 py-2 HoverButtons w-full mt-4"
                  >
                    <span className="w-12 h-auto pr-3 ml-3.5">
                      <IconPlay customStyle={true} />
                    </span>
                    <span className="flex flex-col flex-1 mr-3.5 items-center">
                      <span className="w-full text-2xl">
                        ESCUCHA: <span className="">+ de 75</span>
                      </span>
                      <span className="font-StageGroteskRegular text-[0.59rem] tracking-[0.248em] pl-1 text-center">
                        EL GRAN EXITO DE “LOS CLÁSICOS”
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full" />
      </div>
    </main>
  );
};
