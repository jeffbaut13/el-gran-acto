import React, { useState, useEffect } from "react";
import axios from "axios";
import Buscando from "./Buscando";
import SeleccionarFecha from "./SeleccionarFecha";

const Viejito = ({ tipoInteraccion }) => {
  const [abuelito, setAbuelito] = useState(null);
  const [buscando, setBuscando] = useState(true);
  const [error, setError] = useState(null);
  const [estado, setEstado] = useState("viejito"); // Estado para controlar qué componente mostrar

  useEffect(() => {
    const obtenerAbuelito = async () => {
      try {
        if (!tipoInteraccion) {
          throw new Error("El parámetro tipoInteraccion es obligatorio.");
        }

        // Llamada al backend
        const response = await axios.get("https://backboletas.onrender.com/abuelito", {
          params: { tipoInteraccion },
        });

        if (response.status === 200 && response.data) {
          setAbuelito(response.data);
        } else {
          throw new Error("No se encontró un abuelito disponible.");
        }

        // Simular el tiempo de carga de 8 segundos
        setTimeout(() => {
          setBuscando(false);
        }, 8000);
      } catch (err) {
        console.error("Error al obtener el abuelito:", err);
        setError(err.message || "Ocurrió un error al obtener el abuelito.");
        setBuscando(false);
      }
    };

    obtenerAbuelito();
  }, [tipoInteraccion]);

  if (buscando) {
    return <Buscando />;
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="button_large mt-5"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!abuelito) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No se encontró un abuelito. Intenta nuevamente.</p>
        <button
          onClick={() => window.location.reload()}
          className="button_large mt-5"
        >
          Reintentar
        </button>
      </div>
    );
  }

  // Mostrar el componente SeleccionarFecha cuando el estado cambia
  if (estado === "seleccionarFecha") {
  return <SeleccionarFecha documentoId={abuelito.id} tipoInteraccion={tipoInteraccion} onAgendarClick={() => console.log('Registro completado')} />;
}


  return (
    <div className="w-full h-full xs:flex xs:flex-col md:flex md:flex-row pr-14 items-center justify-center">
      <div className="border relative border-primary backdrop-blur-2xl md:w-[53rem] md:h-[28rem] xs:w-[25rem] xs:h-[50rem] xs:ml-10 xs:h-[45rem] rounded-lg xs:flex xs:flex-col md:flex md:flex-row items-center justify-center">
        <div className="bg-white md:w-1/2 md:h-full rounded-lg">
          <img
            className="rounded-lg object-cover"
            src={abuelito.foto}
            alt={abuelito.nombre}
          />
        </div>
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <div className="w-[70%] h-[70%] flex flex-col justify-center">
            <p>TE PRESENTAMOS A:</p>
            <h1 className="font-Wayland text-[2rem] uppercase">{abuelito.nombre}</h1>
            <p>
              Él es el abuelito con el que mejor te entenderás, compartirás
              grandes historias y del que te llevarás un gran recuerdo.
            </p>
            <button
              className="button_large mt-5"
              onClick={() => setEstado("seleccionarFecha")} // Cambiar al estado para mostrar SeleccionarFecha
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viejito;
