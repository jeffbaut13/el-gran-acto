import React from "react";

const PrincipalMatch = ({ cambiarComponente }) => {
  return (
    <>
      <div className="w-full h-1/2 flex flex-col items-center justify-start">
        <h1 className="text-[4.4rem] leading-[3.5rem] pb-10 text-center font-Wayland mt-10">
          DONA TIEMPO
          <br /> A UN ABUELITO EN NAVIDAD
        </h1>
      </div>
      <div className="w-full h-1/2 flex justify-center">
        <div className="w-[42rem] mt-[7rem]">
          <p className="text-center text-xl">
            En Navidad, entregar es mejor que recibir, por eso nos unimos al
            ancianato de Facatativá para que puedas compartir con uno de sus
            abuelos a través de una visita o una videollamada.
          </p>
          <p className="text-center text-xl mt-5">
            A continuación, podrás agendar, cambiar o cancelar, tu visita o
            videollamada.
          </p>
          <div className="flex justify-center gap-10 mt-[2rem] h-full caja">
            <button
              className="button_large"
              onClick={() => cambiarComponente("Preguntas")}
            >
              AGENDAR
            </button>
            <button className="button_large">REAGENDAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalMatch;
