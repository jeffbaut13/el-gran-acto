import React from 'react'

const PreguntasSlide = () => {
  return (
            {/* <p className="font-StageGroteskRegular text-xl text-center">
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
                className={`border my-2 rounded-md w-full h-10 flex justify-start font-StageGroteskRegular capitalize ${
                  opcionSeleccionada === index ? 'bg-primary text-second' : 'bg-transparent text-primary'
                }`}
              >
                <p className=" pl-2">{String.fromCharCode(65 + index)}</p>
                <p className="ml-2">{texto}</p>
              </button>
            ))}
          </div>
        </div>

        
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
        </div> */}

{/*         <div className=' visita'>
          <button className=' flex flex-col w-[33rem] h-[8rem] bg-transparent border border-primary font-Wayland HoverButtons'>
            <div className=' flex border-b-[1px] w-[90%] justify-between'>
            <span className=' text-primary text-[2rem]'>Agendar Visita</span>
            <img className='w-8' src='/iconos/flechaVisita.svg' />
            </div>
            <div className=' w-[90%] flex'>
              <p className=' text-primary text-sm text-start capitalize font-StageGroteskRegular'>Programa una visita y dona tu tiempo en el ancianato de Facatativá.</p>
            </div>
            
          </button>
          <button className=' flex flex-col w-[33rem] h-[8rem]  bg-transparent border border-primary mt-10 font-Wayland HoverButtons'>
          <div className=' flex border-b-[1px] w-[90%] justify-between'>
            <span className=' text-primary text-[2rem]'>Agendar Videollamada</span>
            <img className='w-8' src='/iconos/flechaVisita.svg' />
            </div>
            <div className=' w-[90%] flex '>
              <p className=' text-primary text-sm capitalize font-StageGroteskRegular'>Si estás fuera de Facatativá, también puedes donarle tiempo.</p>
            </div>
          </button>
        </div>
 

  )
}

export default PreguntasSlide