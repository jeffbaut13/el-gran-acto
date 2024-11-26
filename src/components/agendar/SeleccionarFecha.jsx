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
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p>Selecciona el día, la hora y registra tus datos para donar tu tiempo.</p>
        <div className=" flex gap-5">

        <div className=" relative border border-primary rounded-xl mt-4 calendario flex flex-col items-center justify-center backdrop-blur-2xl">
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
          

          <div className=" flex justify-between w-[70%] px-2  horas absolute border border-primary rounded-lg bottom-[-4.5rem] bg-black bg-opacity-85 items-start">
<div className=" flex flex-col">

          <p> 10:00 am - 10:30 am</p>
          <p> 10:00 am - 10:30 am</p>
          <p> 10:00 am - 10:30 am</p>
          <p> 10:00 am - 10:30 am</p>
</div>
          <button className=" bg-transparent w-2">
            <img className=" -rotate-90" src="/iconos/arrow-slide.svg" />
          </button>

          </div>
          
        </div>
        <div className=" border border-primary rounded-xl mt-4 w-[20rem] h-[26rem]">
          <form className=" px-5 w-full flex flex-col justify-center h-full">
            <fieldset className=" flex flex-col items-center py-5">
            <label className="">
              Nombre:
            </label>
            <input className=" bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35" placeholder="Ingresa tu nombre"></input>
            </fieldset>
            <fieldset className=" flex flex-col items-center py-5">
            <label className="">
              Celular:
            </label>
            <input className=" bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35" placeholder="Ingresa tu número"></input>
            </fieldset>
            <fieldset className=" flex flex-col items-center py-5">
            <label className="">
              Correo:
            </label>
            <input className=" bg-transparent border border-primary rounded-lg w-full text-center placeholder:text-primary placeholder:opacity-35" placeholder="correo@correo.com"></input>
            </fieldset>
          </form>

        </div>
        </div>
        <button
            onClick={onAgendarClick} // Llama a la función al hacer clic
            className="button_large HoverButtons mt-5"
          >
            REGISTRARSE
          </button>

      </div>
    </div>
  );
};

export default SeleccionarFecha;
