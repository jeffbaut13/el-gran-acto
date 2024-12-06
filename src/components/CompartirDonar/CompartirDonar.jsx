import { isMobile } from "../../data/medidas";
import { links } from "../header/MenuLink";
import { Socials } from "../helpers/Socials";

export const CompartirDonar = ({ reff }) => {
  const backgroundImage = "/imagenes/compartir-donacion.webp";
  const backgroundImageM = "/imagenes/compartir-donacionM.webp";
  const social = ["facebook", "whatsapp", "X"];

 
  return (
    <section
      ref={reff}
      id={`${links[2]}`}
      className="h-screen w-full flex flex-col justify-center items-center snap-item relative p-responsive"
      style={{
        backgroundImage: `url(${
          isMobile ? backgroundImageM : backgroundImage
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full lg:bg-gradient-to-r xs:bg-gradient-to-t from-[#000000d6] to-40% absolute left-0 top-0" />
      <div className="w-full z-10 relative flex h-full xs:items-end lg:items-center max-lg:pb-28">
        <div className="lg:w-2/5 xs:w-full lg:pl-20">
          <h2 className="titles font-Wayland ">
            INVITA A <br className="max-lg:hidden" />
            OTRA PERSONA <br className="lg:hidden" /> A{" "}
            <br className="max-lg:hidden" />
            DONAR SU TIEMPO
          </h2>
          <hr className="w-full my-4" />

          <h3 className="tracking-[0.15em] text-sm lg:text-center xs:text-start">
            <strong>EN NAVIDAD,</strong> ENTREGAR ES MEJOR QUE RECIBIR.
          </h3>
          <div className="flex flex-col justify-center items-center mt-8">
            <h4 className="text-xl w-full lg:text-center xs:text-start">
              Invitar a través de:
            </h4>
            <div className="w-full flex justify-between mt-2 gap-4">
              <Socials texto={"En Navidad, entregar es mejor que recibir. Por eso, te estoy invitado a donar tu tiempo a un abuelito en: ElGranActo.com"} url={"https://ElGranActo.com"} />
            </div>
          </div>
        </div>
        <div className="w-1/2 max-lg:hidden" />
      </div>
    </section>
  );
};
