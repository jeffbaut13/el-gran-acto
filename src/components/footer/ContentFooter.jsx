import { Link } from "react-router-dom";
import { links } from "../header/MenuLink";

const campañas = [
  {
    title: "Entregar es mejor que recibir",
    url: "https://cartadedavid.granentrega.com",
    img: "entrega-david",
  },
  {
    title: "Guardianes del páramo",
    url: "https://www.guardiandelparamo.com/",
    img: "guardianes-del-paramo",
  },
  {
    title: "Operación mayo",
    url: "https://operacionmayo.com/",
    img: "operacion-mayo",
  },
  {
    title: "¡Ganémosla de nuevo!",
    url: "https://www.youtube.com/watch?v=uzJmSqZlXmc&t=7s",
    img: "ganemosla-de-nuevo",
  },
  {
    title: "Amigos del alma",
    url: "https://amigodelalma.com/",
    img: "amigos-del-alma",
  },
];

export const ContentFooter = () => {
  return (
    <section
      id={`${links[6]}`}
      //id={`${links[8]}`}
      className="w-full h-screen bg-[#131313] text-primary flex flex-col justify-center lg:px-10 snap-item gap-4"
    >
      <h2 className="font-Wayland w-full text-center text-[3.15rem] leading-[3rem]">
        CONOCE AQUÍ OTRAS DE NUESTRAS ENTREGAS
      </h2>
      <hr className="border-white border-0.5 max-lg:hidden" />
      <div className="w-full h-[60%] max-lg:overflow-x-scroll">
        <div className="lg:w-full xs:w-[300vw] h-full flex gap-4">
          {campañas.map((campaña, i) => (
            <Link
              to={campaña.url}
              target="_blank"
              key={i}
              className="w-full h-full pt-6 hover:p-0 ease-in-out transition-all duration-300 opacity-60 hover:opacity-100 relative group overflow-hidden"
            >
              <img
                className="object-cover rounded-2xl"
                src={`/imagenes/${campaña.img}.webp`}
                alt=""
              />
              {/* <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white font-StageGroteskBlack text-5xl w-full p-2 translate-y-full z-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out transition-all duration-500">
              {campaña.title}
            </h3> */}
              {/* <div className="w-full h-full bg-gradient-to-t from-black to-50% opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-300 absolute top-0 left-0 z-10" /> */}
            </Link>
          ))}
        </div>
      </div>
      <p className="w-full text-center text-white text-[1.05rem] pt-6 ">
        DERECHOS RESERVADOS INTER RAPIDÍSIMO - 2024
      </p>
    </section>
  );
};
