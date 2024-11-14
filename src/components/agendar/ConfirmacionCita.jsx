import React from "react";

const ConfirmacionCita = ({ onUbiClick }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-20 ">
      <h1 className=" font-Wayland text-[2rem] leading-7 text-center mb-4">
        MIGUEL, TU VISITA A VLADIMIR <br />
        HA SIDO CONFIRMADA.
      </h1>
      <div className=" border border-primary w-[34rem] h-[23rem] rounded-xl backdrop-blur-2xl bg-white bg-opacity-10">
        <div className=" flex flex-col justify-center items-center h-full ">
          <p className=" font-StageGroteskBold ">Fecha:</p>
          <div className="bg-transparent border border-primary rounded-lg w-[80%] mb-10 mt-3 flex justify-center">
            <p>08 / 12 / 2024</p>
          </div>
          <p className=" font-StageGroteskBold ">Hora:</p>
          <div className="bg-transparent border border-primary rounded-lg w-[80%] mb-10 mt-3 flex justify-center">
            <p>3:00 P. M.</p>
          </div>
          <p className=" font-StageGroteskBold ">Lugar:</p>
          <div className="bg-transparent border border-primary rounded-lg w-[80%] mb-10 mt-3 flex justify-center">
            <p>Centro de Bienestar Del Anciano San José</p>
          </div>

          <button
            className="bg-transparent border border-primary rounded-lg w-[50%] my-3 font-StageGroteskRegular text-primary HoverButtons"
            onClick={onUbiClick}
          >
            Ver ubicación
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionCita;
