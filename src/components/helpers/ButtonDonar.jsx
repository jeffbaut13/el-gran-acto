import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "../header/MenuLink";

export const ButtonDonar = ({ showButton }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (showButton) {
      gsap.to(buttonRef.current, {
        translateX: "-17%",

        pointerEvents: "all",
      });
    } else {
      gsap.to(buttonRef.current, {
        translateX: "100%",

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
    <div
      ref={buttonRef}
      className="fixed top-1/2 -translate-y-1/2 right-0 w-12 h-[12.15rem] z-[19]"
    >
      <button
        className="leading-[1rem] text-[0.838rem] overButtons bg-tercero w-full h-full rounded-r-none text-second hover:scale-105 overflow-hidden"
        onClick={() => handleClick(`${links[1]}`)}
      >
        <span className="whitespace-nowrap -rotate-90">
          DONA TIEMPO <br />A UN ABUELITO
        </span>
      </button>
    </div>
  );
};
