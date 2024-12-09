import { useNavigate } from "react-router-dom";
import { links } from "../header/MenuLink";
import { isMobile } from "../../data/medidas";
import { PasoUno } from "./Pasos/PasoUno";

export const SouvenirHome = ({ reff }) => {
  const navigate = useNavigate();
  const backGround = isMobile ? "backGroundSouvenirM" : "backGroundSouvenir";

  return (
    <section
      ref={reff}
      //id={`${links[4]}`}
      id={`${links[3]}`}
      className="w-full h-screen snap-item relative bg-black select-none max-lg:flex max-lg:justify-start"
    >
      <figure className="absolute w-full h-full">
        <img
          className="object-cover"
          src={`/imagenes/${backGround}.webp`}
          alt=""
        />
      </figure>
      <div className="content relative flex max-lg:flex-col w-full h-full px-10">
        <div className="lg:w-1/2 xs:w-full xs:h-[60%] lg:h-full" />
        <div className="lg:w-1/2 xs:w-full xs:flex-1 lg:h-full flex lg:justify-center lg:items-start flex-col lg:pl-20">
        
          <PasoUno
            btn={
              <button
                onClick={() => navigate("/personalizacion")}
                className="px-7 py-1.5 text-[1.2rem] max-lg:mx-auto HoverButtons"
              >
                PERSONALIZAR
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};
