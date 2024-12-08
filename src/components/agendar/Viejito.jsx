import React, { useState, useEffect } from "react";
import axios from "axios";
import Buscando from "./Buscando";

const Viejito = ({ tipoInteraccion }) => {
  const [abuelito, setAbuelito] = useState(null);
  const [buscando, setBuscando] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="w-full h-full flex pr-14 items-center justify-center">
      <div className="border relative border-primary backdrop-blur-2xl w-[53rem] h-[28rem] rounded-lg flex items-center justify-center">
        <div className="bg-white w-1/2 h-full rounded-lg">
          <img className="rounded-lg object-cover" src={abuelito.foto} alt={abuelito.nombre} />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="w-[70%] h-[70%] flex flex-col justify-center">
            <p>TE PRESENTAMOS A:</p>
            <h1 className="font-Wayland text-[2rem] uppercase">{abuelito.nombre}</h1>
            <p>Él es el abuelito con el que mejor te entenderás, compartirás grandes historias y del que te llevarás un gran recuerdo.</p>
            <button className="button_large mt-5">
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viejito;
