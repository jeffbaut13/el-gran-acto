import React from 'react';

const Viejito = ({ onAgendar }) => {
  return (
    <div className="w-full h-full flex pr-14 items-center justify-center">
      <div className="border relative border-primary backdrop-blur-2xl w-[53rem] h-[28rem] rounded-lg flex items-center justify-center">
        <div className="bg-white w-1/2 h-full rounded-lg">
          <img className="rounded-lg" src="/imagenes/fotoViejito.jpg" alt="Viejito" />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[70%] h-[70%] flex flex-col justify-center">
            <p>TE PRESENTAMOS A:</p>
            <h1 className="font-Wayland text-[2rem]">VLADIMIR MARÍN</h1>
            <p>Él es el abuelito con el que mejor te entenderás, compartirás grandes historias y del que te llevarás un gran recuerdo.</p>
            <button onClick={onAgendar} className="button_large mt-5">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viejito;
