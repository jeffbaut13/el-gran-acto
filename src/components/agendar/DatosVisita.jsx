// DatosVisita.jsx
import React from 'react';

const DatosVisita = ({ onRegistroClick }) => {
  return (
    <div className="w-full flex items-center justify-center py-12 px-20">
      <div className="border border-primary w-[34rem] h-[23rem] rounded-xl backdrop-blur-2xl bg-white bg-opacity-10">
        <form className="flex flex-col justify-center items-center h-full">
          <label className="font-StageGroteskBold">Nombre:</label>
          <input
            type="text"
            className="bg-transparent border border-primary rounded-lg w-[80%] mb-10 mt-3"
          />
          <label className="font-StageGroteskBold">Correo:</label>
          <input
            type="email"
            className="bg-transparent border border-primary rounded-lg w-[80%] mb-10 mt-3"
          />
          <button
            type="button"
            onClick={onRegistroClick} // Llama a la función al hacer clic
            className="bg-transparent border border-primary rounded-lg w-[50%] mt-3 font-StageGroteskRegular text-primary HoverButtons"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default DatosVisita;
