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
