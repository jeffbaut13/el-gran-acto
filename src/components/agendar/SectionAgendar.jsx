import React from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import { Link, NavLink } from "react-router-dom";


const SectionAgendar = () => {
  return (
    <div className="w-full h-screen relative flex justify-between flex-col py-12 px-20 snap-item">
      <AgendarBackGround />
      <div className="w-ful h-1/2 flex flex-col items-center justify-center">
        <div className="w-[40rem]  flex">
          <div className=" w-[2rem] font-Wayland">
            <div className="text-center text-[1rem]">LADO</div>
            <div className="text-center border border-primary rounded-md h-[1.8rem] items-center justify-center flex">
              A
            </div>
          </div>
          <div className=" w-[87%] pl-[5px]">
            <div className=" border-b border-primary h-6"></div>
            <div></div>
          </div>
        </div>

        <h1 className="text-[6rem] leading-[4.8rem] pb-10 text-center font-Wayland">
          DONA TU TIEMPO
          <br />
          A UN ABUELITO <br />
          EN NAVIDAD
        </h1>
      </div>
      <div className="w-ful h-1/2  flex justify-between items-end ">
      <Link to="/visita">
      <div className=" w-[26.5rem] hover:scale-[1.02] duration-200 cursor-pointer h-[11rem] border-2 border-primary rounded-md flex flex-col items-center justify-center px-7">
          <div className="border-b-2 border-primary pb-4 w-full flex items-center">
            <div className=" w-16">
              <img className="w-10 " src="/iconos/botones-agendar.svg" alt="Agendar Visita"/>
            </div>
            <h1 className="text-center font-Wayland text-button ">
              AGENDAR VISITA
            </h1>
          </div>
          <div className="flex">
            <div className=" w-32  "></div>
            <p className=" text-parrafo">
              En esta Navidad, podrás entregarle a un abuelito el mejor regalo
              del mundo, tu tiempo.
            </p>
          </div>
        </div>

      </Link>
        <div className=" w-[26.5rem] hover:scale-[1.02] duration-100 cursor-pointer h-[11rem] border-2 border-primary rounded-md flex flex-col items-center justify-center px-7">
          <div className="border-b-2 border-primary pb-4 w-full flex items-center">
            <div className=" w-16">
              <img className="w-10" src="/iconos/botones-agendar.svg" />
            </div>

            <h1 className=" text-center font-Wayland text-button">
              AGENDAR VIDEOLLAMADA
            </h1>
          </div>
          <div className="flex">
            <div className=" w-32 "></div>
            <p className=" text-parrafo">
              Si estás fuera de Facatativá, también puedes regalarle tiempo a
              uno de nuestros abuelitos.
            </p>
          </div>
        </div>
        <div className=" w-[26.5rem] hover:scale-[1.02] duration-100 cursor-pointer h-[11rem] border-2 border-primary rounded-md flex flex-col items-center justify-center px-7">
          <div className="border-b-2 border-primary pb-4 w-full flex items-center">
            <div className=" w-16 ">
              <img className="w-10" src="/iconos/botones-agendar.svg" />
            </div>

            <h1 className=" text-center font-Wayland text-button">REAGENDAR</h1>
          </div>
          <div className="flex">
            <div className=" w-36 "></div>
            <p className=" text-parrafo">
              Si por algún motivo no puedes asistir a tu visita o tener la
              videollamada, acá podrás cambiar la fecha solo una vez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAgendar;
