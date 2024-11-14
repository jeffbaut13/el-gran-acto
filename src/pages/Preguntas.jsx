import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { PreguntasBackGround } from '../components/agendar/PreguntasBackGround';

const Preguntas = () => {
  const navigate = useNavigate(); // Define navigate para redirección
  // Lista de preguntas y respuestas
  const preguntasData = [
    {
      pregunta: 'Si pudiera conocer la historia de la vida de un abuelito, ¿De qué tema le gustaría que le contara?',
      opciones: ['Viajes', 'Consejos de vida', 'Historias familiares', 'Historias del trabajo', 'Pasatiempos', 'Talentos', 'Grandes logros']
    },
    {
      pregunta: 'Al visitar al abuelito, ¿Qué tipo de actividad le gustaría compartir con él/ella?',
      opciones: ['Juegos de Mesa', 'Historias de su vida', 'Ver un albúm de fotos', 'Coser', 'Ver televisión', 'Leer' ]
    },
    {
      pregunta: '¿De qué equipo eres hincha?',
      opciones: ['Santa Fé', 'Millonarios', 'Nacional', 'América', 'Otro']
    },
    {
      pregunta: '¿Cuál de estos artistas te gustaría escuchar con un abuelito?',
      opciones: ['Leonardo Favio', 'Leo Dan', 'Pedro Infante', 'Vicente Fernández']
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
     // Aquí podrías redirigir al usuario o mostrar un mensaje de finalización
     navigate('/match');
   }
 };

 // Pregunta y opciones actuales
 const { pregunta, opciones } = preguntasData[preguntaIndex];

 // Cálculo del progreso
 const progreso = ((preguntaIndex + 1) / preguntasData.length) * 100;

 return (
   <div className="w-full h-screen flex py-12 px-20">
     <PreguntasBackGround />
     <div className="w-[61rem] h-full"></div>
     <div className="w-[39rem] h-full flex flex-col justify-center">
       <div className="border relative border-primary w-[28rem] h-[37rem] rounded-xl flex flex-col items-center justify-center">
         <button onClick={handleSiguientePregunta} className="absolute bg-transparent w-4 right-[-3rem]">
           <img src="/iconos/flechaSiguiente.svg" alt="Siguiente" />
         </button>
         <h1 className="font-Wayland text-[2rem] leading-[1.5rem] text-center">
           HAZ MATCH CON<br />
           UN ABUELITO
         </h1>
         <h1 className="font-Wayland text-[2rem] mt-4">
           {`PREGUNTA #${preguntaIndex + 1}`}
         </h1>
         <div className="px-20 w-full">
           <p>
             <strong>{pregunta}</strong>
           </p>
           {opciones.map((texto, index) => (
             <button
               key={index}
               onClick={() => handleSeleccionarOpcion(index)}
               className={`border my-2 rounded-md w-full h-10 flex items-center ${
                 opcionSeleccionada === index
                   ? 'bg-primary text-second'
                   : 'bg-transparent text-primary'
               }`}
             >
               <p className="flex-none pl-2">{String.fromCharCode(65 + index)}</p>
               <p className="flex-1 text-center">{texto}</p>
             </button>
           ))}
         </div>
       </div>
       {/* Barra de progreso */}
       <div className="border border-primary rounded-md w-[28rem] h-4 mt-4">
         <div
           className="bg-primary h-full rounded-md"
           style={{ width: `${progreso}%` }}
         ></div>
       </div>
     </div>
   </div>
 );
};

export default Preguntas;