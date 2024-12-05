import { useState, useRef } from "react";
import { SlideClasicos } from "./SlideClasicos";
import "./clip-path.css";
import { SliderOneSlide } from "./SliderOneSlide";
import { abuelitos } from "../../data/viejitos";
import { PopUp } from "./PopUp";
import { links } from "../header/MenuLink";
import { HoverCard } from "./HoverCard";

export const LosClasicosCards = ({ reff }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  // Referencias para ambos sliders
  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);

  return (
    <section
      ref={reff}
      id={`${links[4]}`}
      //id={`${links[5]}`}
      className="h-screen w-full flex flex-col justify-center items-center snap-item bg-black relative z-[5]"
    >
      <div className="w-full h-full absolute top-0 left-0 opacity-30 z-0 bg-second"></div>
      <div className="w-full h-full z-10 flex flex-col justify-center gap-2 lg:px-12">
        <div className="w-full p-responsive">
          <h2 className="titles font-Wayland text-center">
            CONOCE A <br />
            LOS CLÁSICOS
          </h2>
          <p className="text-center my-6 ">
            Esta banda musical conformada por 5 abuelitos que fue capaz de
            conmover <br className="max-lg:hidden" />a todo un país con el poder
            y el mensaje de sus letras.
          </p>
        </div>
        <div className="custom relative lg:h-[31.95rem] xs:h-[55%] flex items-center">
          {open && (
            <>
              <div className="w-full scale-110 bg-black bg-opacity-5 backdrop-blur-md absolute top-0 left-0 h-full z-[29]" />
              <div className="lg:w-[57.48rem] xs:w-[75%] lg:h-full xs:h-[50%] bg-black bg-opacity-65 absolute xs:top-14 lg:top-0 left-1/2 -translate-x-1/2 z-30 rounded-lg border border-primary">
                <figure
                  onClick={() => setOpen(false)}
                  className="cursor-pointer w-4 h-4 inline-block absolute right-4 top-2"
                >
                  <img src="/iconos/close.svg" alt="" />
                </figure>
                {abuelitos.map((viejito, i) =>
                  i === name ? (
                    <PopUp key={i} viejito={viejito} open={open} />
                  ) : (
                    <React.Fragment key={i}></React.Fragment> // Añadimos la key al Fragment vacío
                  )
                )}
              </div>
            </>
          )}
          <div
            className={`w-full h-full absolute z-20 max-lg:overflow-x-scroll`}
          >
            <HoverCard
              abuelitos={abuelitos}
              setName={setName}
              setOpen={setOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
