import { useState, useRef } from "react";
import { SlideClasicos } from "./SlideClasicos";
import "./clip-path.css";
import { SliderOneSlide } from "./SliderOneSlide";
import { abuelitos } from "../../data/viejitos";

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

  console.log(name);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center snap-item bg-black relative px-20">
      <div className="w-full h-full absolute top-0 left-0 opacity-30 z-0 bg-second"></div>
      <div className="w-full h-full z-10 flex flex-col justify-center px-12">
        <div className="w-full">
          <h2 className="text-titlesBig leading-[5.2rem] font-Wayland text-center">
            CONOCE A <br />
            LOS CLÁSICOS
          </h2>
          <p className="text-center my-6">
            Esta banda musical conformada por 5 abuelitos que fue capaz de
            conmover <br />a todo un país con el poder y el mensaje de sus
            letras.
          </p>
        </div>
        <div className="custom relative h-[26.37rem] flex items-center">
          <div
            style={{ left: "20%" }}
            className={`w-[15.19rem] h-full absolute z-50`}
          >
            <SliderOneSlide
              setName={setName}
              abuelitos={abuelitos}
              setOpen={setOpen}
              sliderRef={sliderOneRef}
            />
            {open && (
              <div className="w-[250%] h-full bg-blue-500 absolute top-0 left-[90%] z-10 rounded-r-lg">
                {abuelitos.map((viejito, i) => (
                  <>{i === name ? viejito.nombre : ""}</>
                ))}
              </div>
            )}
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
