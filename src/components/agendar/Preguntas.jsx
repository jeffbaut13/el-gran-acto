import React, { useState } from "react";
import { PreguntasBackGround } from "./PreguntasBackGround";
import Buscando from "./Buscando";
import Viejito from "./Viejito";
import SeleccionarFecha from "./SeleccionarFecha";

const Preguntas = () => {
  const preguntasData = [
    {
      pregunta: "¿Qué prefieres hacer en un día libre?",
      opciones: [
        "Libros o películas.",
        "Descubrir un lugar.",
        "Escribir, pintar o cocinar.",
        "Amigos o familia.",
      ],
    },
    {
      pregunta: "¿Qué actividad disfrutas más con otras personas?",
      opciones: [
        "Conversaciones profundas.",
        "Compartir momentos divertidos.",
        "Aprender algo nuevo.",
        "Escuchar y dar consejos.",
      ],
    },
    {
      pregunta:
        "Si te piden que cuentes algo interesante de ti, ¿Qué destacarías?",
      opciones: [
        "Una experiencia emocionante.",
        "Un lugar que visitaste.",
        "Una habilidad.",
        "Una gran historia.",
      ],
    },
    {
      pregunta: "¿Qué tipo de conversaciones disfrutas más?",
      opciones: ["Reflexiva.", "Divertida.", "Sobre el pasado.", "Consejos."],
    },
    {
      pregunta: "¿De qué equipo de fútbol eres hincha?",
      opciones: ["Santa Fe.", "Millonarios.", "Nacional.", "Otros."],
    },
    {
      pregunta: "¿Cuál de estos artistas te gustaría escuchar con un abuelito?",
      opciones: [
        "Leonardo Fabio.",
        "Leo Dan.",
        "Pedro Infante.",
        "Vicente Fernández.",
      ],
    },
  ];

  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuestas, setRespuestas] = useState(
    Array(preguntasData.length).fill(null)
  );
  const [estado, setEstado] = useState("preguntas"); // 'preguntas', 'buscando', 'viejito', 'seleccionarFecha'
  const [tipoInteraccion, setTipoInteraccion] = useState(null); // Estado para manejar el tipo de interacción

  const handleSeleccionarOpcion = (indice) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaIndex] =
      preguntasData[preguntaIndex].opciones[indice];
    setRespuestas(nuevasRespuestas);

    if (preguntaIndex === preguntasData.length - 1) {
      setEstado("visita");
    } else {
      setPreguntaIndex(preguntaIndex + 1);
    }
  };

  const handleAnteriorPregunta = () => {
    if (preguntaIndex > 0) {
      setPreguntaIndex(preguntaIndex - 1);
    }
  };

  const mostrarBuscando = (interaccion) => {
    setTipoInteraccion(interaccion); // Guardar la interacción seleccionada
    setEstado("buscando");
    setTimeout(() => setEstado("viejito"), 8000);
  };

  const handleAgendar = () => {
    setEstado("seleccionarFecha");
  };

  const { pregunta, opciones } = preguntasData[preguntaIndex] || {};

  return (
    <div className="w-full h-screen flex py-12 px-20">
      <PreguntasBackGround />
      <div className="w-full h-full flex flex-col items-center justify-center">
        {preguntaIndex < 1 && (
          <div className="w-[25rem] text-center">
            <p>
              Respondiendo unas sencillas preguntas, <br />
              nuestro sistema te podrá asignar al abuelito con el que te podrás
              entender mejor.
            </p>
          </div>
        )}

        {estado === "preguntas" && (
          <div className="border border-primary w-[25rem] h-[28rem] mt-5 rounded-xl flex flex-col items-center justify-center">
            <div className="px-14 w-full">
              <p className="text-center font-StageGroteskBold mb-5">{pregunta}</p>
              {opciones.map((texto, index) => (
                <button
                  key={index}
                  onClick={() => handleSeleccionarOpcion(index)}
                  className="border border-primary my-2 rounded-md w-full h-10 flex justify-start font-StageGroteskRegular capitalize bg-transparent text-primary hover:bg-primary hover:text-black"
                >
                  <p className="pl-2">{String.fromCharCode(65 + index)}</p>
                  <p className="ml-2">{texto}</p>
                </button>
              ))}
            </div>
            {preguntaIndex > 0 && (
              <button
                onClick={handleAnteriorPregunta}
                className="mt-5 text-primary bg-transparent font-StageGroteskRegular border border-primary rounded-md px-4 py-2"
              >
                Atrás
              </button>
            )}
          </div>
        )}

        {estado === "visita" && (
          <div className="visita flex gap-5">
            <button
              onClick={() => mostrarBuscando("Visita")}
              className="flex flex-col w-[33rem] h-[8rem] bg-transparent border border-primary font-Wayland hover:scale-105"
            >
              <div className="flex border-b-[1px] border-primary w-[90%] justify-between">
                <span className="text-primary text-[2rem]">Agendar Visita</span>
                <img
                  className="w-8"
                  src="/iconos/flechaVisita.svg"
                  alt="Visita"
                />
              </div>
              <div className="w-[90%] flex">
                <p className="text-primary text-start capitalize font-StageGroteskRegular">
                  Programa una visita y dona tu tiempo en el ancianato de
                  Facatativá.
                </p>
              </div>
            </button>
            <button
              onClick={() => mostrarBuscando("videollamada")}
              className="flex flex-col w-[33rem] h-[8rem] bg-transparent border border-primary font-Wayland hover:scale-105"
            >
              <div className="flex border-b-[1px] border-primary w-[90%] justify-between">
                <span className="text-primary text-[2rem]">
                  Agendar Videollamada
                </span>
                <img
                  className="w-8"
                  src="/iconos/flechaVisita.svg"
                  alt="Videollamada"
                />
              </div>
              <div className="w-[90%] flex">
                <p className="text-primary text-start capitalize font-StageGroteskRegular">
                  Realiza una videollamada y dona tu tiempo en el ancianato de
                  Facatativá.
                </p>
              </div>
            </button>
          </div>
        )}

        {estado === "buscando" && <Buscando />}

        {estado === "viejito" && (
          <Viejito onAgendar={handleAgendar} tipoInteraccion={tipoInteraccion} />
        )}

        {estado === "seleccionarFecha" && <SeleccionarFecha />}
      </div>
    </div>
  );
};

export default Preguntas;
