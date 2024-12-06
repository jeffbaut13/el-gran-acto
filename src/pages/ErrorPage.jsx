import React from "react";
import { isMobile } from "../data/medidas";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const backgroundImage = "/imagenes/thankyou_page.webp";
  const backgroundImageM = "/imagenes/thankyou_pageM.webp";

  return (
    <>
      <main className="h-full w-full z-10 font-Wayland">
        <div className="h-full w-full relative snap-item">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img
              className="object-cover"
              src={isMobile ? backgroundImageM : backgroundImage}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center lg:justify-between xs:justify-around w-full h-full z-10 relative py-14">
            {/* Fondo de la pantalla principal */}
            <div className="titulo w-full flex flex-col gap-3 justify-center items-center">
              <h2 className="text-primary  lg:text-5xl xs:text-4xl font-BebasNeue">
                404
              </h2>
              <h1 className="text-primary   lg:text-5xl xs:text-4xl text-center">
                UPS, PARECE QUE SE TE EMPEZARON <br />A OLVIDAR LAS COSAS
              </h1>
            </div>

            <div className="flex justify-center gap-4 items-center w-[60%] max-lg:flex-col">
              <button className="py-2 px-3.5" onClick={navigate("/")}>Volver a la página</button>
            </div>
          </div>

           <div className="overlay absolute top-0 left-0 bg-black opacity-40 w-full h-full" />
        </div>
      </main>
    </>
  );
};
