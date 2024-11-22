import { useState } from "react";
import { SlideClasicos } from "./SlideClasicos";
import "./clip-path.css";
import gsap from "gsap";
export const LosClasicos = () => {
  const backgroundImage = "/imagenes/los-clasicos.webp";
  const [active, setActive] = useState(0);

  const HandleActiveNext = () => {
    if (active >= 0 && active <= 3) {
      setActive(active + 1);
    } else if (active >= 4) {
      setActive(0);
    }
  };
  const HandleActivePrev = () => {
    if (active <= 0) {
      setActive(4);
    } else if (active >= 0 && active <= 5) {
      setActive(active - 1);
    }
  };

  console.log(active);
  
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center snap-item bg-black relative px-20">
      <div className="w-full h-full absolute top-0 left-0 opacity-30 z-0 bg-second"></div>
      <div className="w-full h-full z-10 flex flex-col justify-center px-12">
        <div className="w-full">
          <h2 className="text-titlesBig leading-[5.2rem] font-Wayland text-center">
            CONOCE A <br />
            LOS CLÁSICOS
          </h2>
          <p className="text-center mt-6">
            Esta banda musical conformada por 5 abuelitos que fue capaz de
            conmover <br />a todo un país con el poder y el mensaje de sus
            letras.
          </p>
        </div>
        <div className="relative h-[26.37rem] flex items-center">
          <div className="w-[14.19rem] h-full absolute z-10 left-[17.313rem]">
            <figure className="w-full h-full rounded-xl overflow-hidden relative">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  className={`clip clip-${i} ${
                    active == i ? "active" : "done"
                  } absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all ease-out duration-1000`}
                  src={`/imagenes/abuelo${i}.jpg`}
                  alt=""
                />
              ))}
            </figure>
          </div>
          <SlideClasicos
            HandleActiveNext={HandleActiveNext}
            HandleActivePrev={HandleActivePrev}
          />
        </div>
      </div>
    </section>
  );
};
