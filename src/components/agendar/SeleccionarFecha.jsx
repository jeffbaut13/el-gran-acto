// SeleccionarFecha.jsx
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es"; // Importa el idioma español
import "react-datepicker/dist/react-datepicker.css";

const SeleccionarFecha = ({ onAgendarClick }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  registerLocale("es", es);

  return (
    <div className="w-full h-screen flex py-12 px-20">
      <div className="w-1/2 h-full flex flex-col items-end pr-14 justify-center">
        <div className="border relative border-primary backdrop-blur-2xl w-[23rem] h-[34rem] rounded-lg flex flex-col items-center justify-center px-10">
          <button className="w-8 absolute bg-transparent left-[-3rem] HoverButtons">
            <img src="/iconos/flechaMatch.svg" />
          </button>
          <button className="w-8 absolute bg-transparent right-[-3rem] HoverButtons">
            <img className="rotate-180" src="/iconos/flechaMatch.svg" />
          </button>
          <div className="bg-white w-[90%] h-[40%] rounded-lg">
            <img className="rounded-lg" src="/imagenes/fotoViejito.jpg" />
          </div>
          <div>
            <span className="flex gap-2 mt-4">
              <img className="w-4" src="/iconos/ubicacion.svg" />
              <p>Facatativa</p>
            </span>
            <h1 className="font-Wayland text-[2rem]">VLADIMIR MARÍN</h1>
            <p className="font-Wayland text-[1.2rem]">84 años</p>
            <p className="text-[1.2rem]">Carpintero</p>
            <p>
              Es un aficionado a resolver los crucigramas del periódico y es una
              enciclopedia viva del fútbol profesional.
            </p>
            <div className="w-full flex items-center justify-center">
              <button className="bg-transparent mt-4 HoverButtons">
                <img className="w-14" src="/iconos/corazon.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-start pl-[5rem]">
        <p>Selecciona el día que quieres donar tu tiempo.</p>
        <div className="border border-primary rounded-xl mt-4 calendario flex flex-col items-center justify-center backdrop-blur-2xl">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            locale="es"
            inline
            renderCustomHeader={({ monthDate }) => (
              <div className="text-center text-xl font-bold mb-2">
                {monthDate
                  .toLocaleDateString("es-ES", {
                    month: "long",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </div>
            )}
          />
          <button
            onClick={onAgendarClick} // Llama a la función al hacer clic
            className="w-[80%] font-StageGroteskRegular h-8 my-5 text-primary bg-transparent border border-primary rounded-lg HoverButtons"
          >
            Agendar Visita
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeleccionarFecha;
