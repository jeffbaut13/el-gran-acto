import { useNavigate } from "react-router-dom";
import { links } from "../header/MenuLink";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { isMobile } from "../../data/medidas";

export const ButtonSouvenir = ({ showButton }) => {
  const [hover, sethover] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (showButton) {
      gsap.to(buttonRef.current, {
        translateX: 0,
        pointerEvents: "all",
      });
    } else {
      gsap.to(buttonRef.current, {
        translateX: `${isMobile ? "200%": "-200%"}`,
        pointerEvents: "none",
      });
    }
  }, [showButton]);

  

  const navigate = useNavigate();

  const handleClick = (hash) => {
    if (window.location.pathname === "/") {
      window.location.hash = hash;

      // Delay para asegurar que el hash esté aplicado antes de hacer el scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Navega al home y añade el hash
      navigate(`/${hash}`);

      // Delay para asegurar que el DOM del home está cargado antes de intentar hacer scroll
      setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Ajusta este valor si es necesario para darle más tiempo al DOM para cargar
    }
  };

 

  return (
    <button
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      ref={buttonRef}
      className="buttonRegalo lg:w-14 lg:h-14 xs:h-12 xs:w-12 lg:hover:w-72 group fixed lg:bottom-6 xs:bottom-[61%] lg:left-7 max-lg:right-1.5 z-[19] hover:bg-[#00000030] bg-transparent border-2 border-primary rounded-full p-3  transition-all ease-in-out duration-200 overflow-hidden"
      onClick={() => handleClick(`${links[4]}`)}
    >
      <figure className="imgButton w-full lg:group-hover:w-8 h-8 inline-block transition-all ease-in-out duration-200">
        <img className="regaloIcon" src="/iconos/regalo.svg" alt="" />
      </figure>
      <span className="textButton text-sm text-primary inline-block w-0 lg:group-hover:w-[70%] max-lg:hidden text-center whitespace-nowrap pointer-events-none  transition-all ease-in-out duration-200 group-hover:">
        <span className="textMessage opacity-0 group-hover:opacity-100 inline-block ml-2 delay-150 transition-all ease-in-out duration-200 translate-x-11 group-hover:translate-x-0">
          COMPRA AQUÍ <br /> UN REGALO INOLVIDABLE
        </span>
      </span>
    </button>
  );
};
