import { useEffect, useState } from "react";
import { Burger } from "./Burger";
import gsap from "gsap";

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevActive) => !prevActive);
  };
  useEffect(() => {
    if (active) {
      gsap.to(".menuLink", {
        opacity: 1,
        display: "flex",
        paddingTop: "3rem",
        ease: "power1.inOut",
        duration: 0.5,
      });
      /* gsap.to(".cerrarMenu", {
        display: "block",
      }); */
    } else {
      gsap.to(".menuLink", {
        opacity: 0,
        display: "none",
        paddingTop: "0rem",
        ease: "power1.inOut",
        duration: 0.5,
      });
      /*  gsap.to(".cerrarMenu", {
        display: "none",
      }); */
    }
  }, [active]);

  return (
    <header className="block fixed top-0 left-0 px-20 w-full z-10 mt-5">
      <div className="w-full h-14 flex justify-between py-4">
        <figure className="h-full w-auto">
          <img src="/iconos/prospero.svg" alt="Icono Inter Rapidísimo" />
        </figure>

        <Burger handleClick={handleClick} active={active} />
      </div>
    </header>
  );
};
