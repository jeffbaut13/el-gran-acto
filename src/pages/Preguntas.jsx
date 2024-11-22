import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { PreguntasBackGround } from '../components/agendar/PreguntasBackGround';

const Preguntas = () => {
  const navigate = useNavigate(); // Define navigate para redirección

  // Lista de preguntas y respuestas
  const preguntasData = [
    {
      pregunta: '¿Qué prefieres hacer En un día libre?',
      opciones: ['Libros o películas.', 'Descubrir un lugar.', 'Escribir, pintar o cocinar.', 'Amigos o familia.']
    },
    {
      pregunta: '¿Qué actividad disfrutas más con otras personas?',
      opciones: ['Conversaciones profundas.', 'Compartir momentos divertidos.', 'Aprender algo nuevo.', 'Escuchar y dar consejos.']
    },
    {
      pregunta: 'Si te piden que cuentes algo interesante de ti, ¿Qué destacarías?',
      opciones: ['Una experiencia emocionante.', 'Un lugar que visitaste.', 'Una habilidad.', 'Una gran historia.']
    },
    {
      pregunta: '¿Qué tipo de conversaciones disfrutas más?',
      opciones: ['Reflexiva.', 'Divertida.', 'Sobre el pasado.', 'Consejos.']
    },
    {
      pregunta: '¿De qué equipo de fútbol eres hincha?',
      opciones: ['Santa Fe.', 'Millonarios.', 'Nacional.', 'Otros.']
    },
    {
      pregunta: '¿Cuál de estos artistas te gustaría escuchar con un abuelito?',
      opciones: ['Leonardo Fabio.', 'Leo Dan.', 'Pedro Infante.', 'Vicente Fernández.']
    }
  ];

  // Estado para el índice de la pregunta actual y las respuestas seleccionadas
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntasData.length).fill(null));
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  // Maneja la selección de una opción
  const handleSeleccionarOpcion = (indice) => {
    setOpcionSeleccionada(indice);
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaIndex] = preguntasData[preguntaIndex].opciones[indice];
    setRespuestas(nuevasRespuestas);
  };

  // Maneja el cambio a la siguiente pregunta solo si hay una respuesta seleccionada
  const handleSiguientePregunta = () => {
    if (opcionSeleccionada === null) {
      alert('Por favor, selecciona una respuesta antes de continuar.');
      return;
    }

    if (preguntaIndex < preguntasData.length - 1) {
      setPreguntaIndex(preguntaIndex + 1);
      setOpcionSeleccionada(null); // Reinicia la opción seleccionada para la siguiente pregunta
    } else {
      console.log('Cuestionario completado:', respuestas);
      navigate('/match');
    }
  };
  const handleAnteriorPregunta = () => {
    if (preguntaIndex > 0) {
      setPreguntaIndex(preguntaIndex - 1);
      setOpcionSeleccionada(respuestas[preguntaIndex - 1] !== null 
        ? preguntasData[preguntaIndex - 1].opciones.indexOf(respuestas[preguntaIndex - 1]) 
        : null); // Restaurar la opción seleccionada de la pregunta anterior si existe
    } else {
      alert('Ya estás en la primera pregunta.');
    }
  };


  // Pregunta y opciones actuales
  const { pregunta, opciones } = preguntasData[preguntaIndex];

  return (
    <div className="w-full h-screen flex py-12 px-20">
      <PreguntasBackGround />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="font-StageGroteskRegular text-xl text-center">
          Respondiendo unas sencillas preguntas,<br />
          nuestro sistema te podrá asignar <br />
          al abuelito con el que te podrás entender mejor.
        </p>

        <div className="border relative border-primary w-[25rem] h-[28rem] mt-5 rounded-xl flex flex-col items-center justify-center">
          <div className="px-14 w-full">
            <p className="text-center font-StageGroteskBold mb-5">{pregunta}</p>
            {opciones.map((texto, index) => (
              <button
                key={index}
                onClick={() => handleSeleccionarOpcion(index)}
                className={`border my-2 rounded-md w-full h-10 flex justify-start font-StageGroteskRegular ${
                  opcionSeleccionada === index ? 'bg-primary text-second' : 'bg-transparent text-primary'
                }`}
              >
                <p className="flex-none pl-2">{String.fromCharCode(65 + index)}</p>
                <p className="ml-2">{texto}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Puntos de progreso */}
        <div className="flex relative items-center justify-center mt-10 gap-5">
        <button onClick={handleAnteriorPregunta} className="absolute bg-transparent w-10 left-[-5rem]">
            <img className=' rotate-180' src="/iconos/flechaSiguiente.svg" alt="Siguiente" />
          </button>

        <button onClick={handleSiguientePregunta} className="absolute bg-transparent w-10 right-[-5rem]">
            <img src="/iconos/flechaSiguiente.svg" alt="Siguiente" />
          </button>

          {preguntasData.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index <= preguntaIndex ? 'bg-primary' : 'bg-transparent border border-primary'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
