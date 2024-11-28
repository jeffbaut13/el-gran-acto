import { useEffect, useRef, useState } from "react";
import { mobile, tablet } from "../../data/medidas";
import gsap from "gsap";
import { FormEvent } from "./FormEvent";

export const Landing = () => {
  const [openForm, setopenForm] = useState(false);

  const backgroundImage = "/imagenes/LANDING-EL-GRAN-FESTIVAL.webp";
  const backgroundImageM = "/imagenes/LANDING-EL-GRAN-FESTIVALM.webp";

  const isMobile = mobile || tablet;

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
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            className="object-cover"
            src={isMobile ? backgroundImageM : backgroundImage}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full z-10 relative">
          {openForm ? (
            <FormEvent/>
          ) : (
            <>
              <figure className="lg:w-[36.58rem] xs:w-5/6 mb-20">
                <img
                  src="/iconos/el-gran-acto-logo.svg"
                  alt="El gran acto - de los clasicos y palo de agua"
                />
                <h2 className="uppercase border border-primary w-full text-center rounded-md leading-10 lg:text-[1.5rem] xs:text-base tracking-[0.132em]">
                  jueves 5 de diciembre 2024 / teatro colón, Bogotá
                </h2>
              </figure>
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
        <div className="overlay absolute top-0 left-0 bg-black w-full h-full" />
      </div>
    </main>
  );
};
