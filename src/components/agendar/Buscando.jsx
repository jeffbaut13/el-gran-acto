import React from "react";
import  Lottie  from "lottie-react";
import casetRotando from "./load-agenda.json";

const Buscando = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center w-[40rem]">
        <Lottie
          animationData={casetRotando}
          loop={true} // Define si se repite
          style={{ width: 200 }} // Ajusta el tamaño
        />
        <h1 className="  w-full text-center font-Wayland mt-10 text-[3rem] leading-[3rem]">
          ESTAMOS BUSCANDO AL ABUELITO <br />
          CON EL QUE MEJOR TE ENTIENDAS
        </h1>
      </div>
    </div>
  );
};

export default Buscando;
