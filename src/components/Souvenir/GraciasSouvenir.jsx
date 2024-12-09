import { useNavigate } from "react-router-dom";
import { links } from "../header/MenuLink";
import { isMobile } from "../../data/medidas";
import { PasoUno } from "./Pasos/PasoUno";

export const GraciasSouvenir = () => {
  const navigate = useNavigate();
  const backGround = isMobile ? "backGroundSouvenirM" : "backGroundSouvenir";

  return (
    <section
      
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
          <h2 className="font-Wayland titles max-lg:text-center">
          GRACIAS
          </h2>
          <p className="pt-6 leading-6 max-lg:text-center">
            Gracias por ser parte de El Gran Acto. Un regalo{" "}
            <br className="max-lg:hidden" />
            inolvidable ya va en camino, listo para crear un{" "}
            <br className="max-lg:hidden" />
            momento que quedará en el corazón.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-7 py-1.5 text-[1.2rem] max-lg:mx-auto HoverButtons my-8"
          >
            VOLVER A LA PÁGINA
          </button>
        </div>
      </div>
    </section>
  );
};
