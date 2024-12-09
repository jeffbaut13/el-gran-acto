import { isMobile } from "../../data/medidas";
import { links } from "../header/MenuLink";
import { Socials } from "../helpers/Socials";

export const Compartir = ({ reff }) => {
  const backgroundImage = "/imagenes/compartir.webp";
  const backgroundImageM = "/imagenes/compartirM.webp";
  const social = ["facebook", "whatsapp", "X"];
  return (
    <section
      ref={reff}
      id={`${links[5]}`}
      //id={`${links[7]}`}
      className="h-screen w-full snap-item relative bg-black"
    >
      <figure className="w-full h-full absolute top-0 left-0">
        <img className="object-cover opacity-85" src={isMobile ? backgroundImageM:backgroundImage} alt="" />
      </figure>
      <div className="w-full h-full absolute left-0 top-0 flex flex-col lg:justify-end xs:justify-start items-center gap-4 snap-item p-responsive lg:pb-20 max-lg:pt-36">
        <h2 className="font-Wayland lg:text-[4.38rem] lg:leading-[4rem] xs:text-[2.7rem] leading-[2.4rem] text-center">
          COMPARTE LA EXPERIENCIA <br/> DE ESTE GRAN ACTO
        </h2>
        <div className="flex justify-center lg:gap-16 xs:gap-4 mt-2">
          <Socials texto={"En Navidad, entregar es mejor que recibir, por eso quiero que ingreses y conozcas cómo puedes dar un regalo inolvidable, en "} url={"https://elgranacto.com"}/>
        </div>
      </div>
    </section>
  );
};
