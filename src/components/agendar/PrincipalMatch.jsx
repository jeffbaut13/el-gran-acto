import React from "react";

const PrincipalMatch = ({ cambiarComponente }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-start"></div>
      <div className="w-full h-full flex flex-col items-center  justify-center video px-5">
        <video className=" bg-white w-[32rem] rounded-xl"></video>

        <h1 className="text-[4.38rem] leading-[4rem] pb-5  font-Wayland mt-10">
          DONA TIEMPO
          <br /> A UN ABUELITO EN NAVIDAD
        </h1>
        <p className="text-start text-xl mt-5">
          En Navidad, entregar es mejor que recibir, por eso nos unimos al
          ancianato de Facatativá para que puedas compartir con uno de sus
          abuelos a través de una visita o una videollamada.
        </p>
        <p className="text-start text-xl mt-5 w-full">
          A continuación, podrás agendar, cambiar o cancelar, tu visita o
          videollamada.
        </p>
        <div className="flex items-start w-full gap-10 mt-[2rem] h-full caja">
          <button
            className="button_large"
            onClick={() => cambiarComponente("Preguntas")}
          >
            AGENDAR
          </button>
          <button className="button_large">REAGENDAR</button>
        </div>
      </div>
    </>
  );
};

export default PrincipalMatch;
