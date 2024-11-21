import { useState, useRef } from "react";
import { SlideClasicos } from "./SlideClasicos";
import "./clip-path.css";
import { SliderOneSlide } from "./SliderOneSlide";
import { abuelitos } from "../../data/viejitos";
import { PopUp } from "./PopUp";

export const LosClasicos = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  // Referencias para ambos sliders
  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);

  const HandleActiveNext = () => {
    if (sliderOneRef.current && sliderTwoRef.current) {
      sliderOneRef.current.slideNext(); // Avanza el primer slider
      sliderTwoRef.current.slideNext(); // Avanza el segundo slider
    }
  };

  const HandleActivePrev = () => {
    if (sliderOneRef.current && sliderTwoRef.current) {
      sliderOneRef.current.slidePrev(); // Retrocede el primer slider
      sliderTwoRef.current.slidePrev(); // Retrocede el segundo slider
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center snap-item bg-black relative px-20">
      <div className="w-full h-full absolute top-0 left-0 opacity-30 z-0 bg-second"></div>
      <div className="w-full h-full z-10 flex flex-col justify-center gap-2 px-12">
        <div className="w-full">
          <h2 className="text-[4.38rem] leading-[3.8rem] font-Wayland text-center">
            CONOCE A <br />
            LOS CLÁSICOS
          </h2>
          <p className="text-center my-6">
            Esta banda musical conformada por 5 abuelitos que fue capaz de
            conmover <br />a todo un país con el poder y el mensaje de sus
            letras.
          </p>
        </div>
        <div className="custom relative h-[31.95rem] flex items-center">
          {open && (
            <>
              <div className="w-full scale-110 bg-black bg-opacity-5 backdrop-blur-md absolute top-0 left-0 h-full z-[29]" />
              <div className="w-[57.48rem] h-full bg-black bg-opacity-65 absolute top-0 left-1/2 -translate-x-1/2 z-30 rounded-lg border border-primary ">
                <figure
                  onClick={() => setOpen(false)}
                  className="w-4 h-4 inline-block absolute right-4 top-2"
                >
                  <img src="/iconos/close.svg" alt="" />
                </figure>
                {abuelitos.map((viejito, i) => (
                  i === name ? <PopUp key={i}  viejito={viejito} open={open}/> : <></>
                ))}
              </div>
            </>
          )}
          <div
            style={{ left: "20%" }}
            className={`w-[15.19rem] h-full absolute z-20`}
          >
            <SliderOneSlide
              setName={setName}
              abuelitos={abuelitos}
              setOpen={setOpen}
              sliderRef={sliderOneRef}
            />
          </div>
          <SlideClasicos
            abuelitos={abuelitos}
            HandleActiveNext={HandleActiveNext}
            HandleActivePrev={HandleActivePrev}
            sliderRef={sliderTwoRef} // Pasar referencia
          />
        </div>
      </div>
    </section>
  );
};
