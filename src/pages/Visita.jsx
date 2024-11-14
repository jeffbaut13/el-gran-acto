import React from "react";
import { VisitaBackGround } from "../components/agendar/visitaBackground";
import { Link } from "react-router-dom";

const Visita = () => {
  return (
    <div className="w-full h-screen relative flex justify-between flex-col py-12 px-20">
      <VisitaBackGround />
      <div className=" w-full h-1/2 flex justify-center items-center font-Wayland">
        <h1 className="text-[6rem] leading-[4.8rem]">
          HAZ MATCH CON UN ABUELITO
        </h1>
      </div>
      <div className="flex flex-col h-1/2 justify-center">
        <div className="flex items-center justify-center pb-10">
          <h2 className="text-[3.5rem] font-Wayland pr-5 ">AGENDAR VISITA</h2>
          <div className="border h-12 border-primary"></div>
          <p className=" px-5 bg-black bg-opacity-20  ">
            En esta Navidad, podrás entregarle a un abuelito el mejor <br />{" "}
            regalo del mundo, tu tiempo.
          </p>
        </div>
        <div className="flex justify-center gap-44">
          <Link to="/">
            <button className="button_large HoverButtons relative">
              
              <img
                className="w-8 absolute left-4"
                src="/iconos/flecha.svg"
              />
              REGRESAR
            </button>
          </Link>
          <Link to="/preguntas">
          <button className="button_large HoverButtons relative">
            
            SIGUIENTE
            <img className="w-8 absolute right-4 top-0 rotate-180" src="/iconos/flecha.svg" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Visita;
