import React from 'react'
import { PreguntasBackGround } from "./PreguntasBackGround";


const Agotados = () => {
  return (
    <div className="w-full h-screen flexCenter py-12 px-20">
        <PreguntasBackGround />
        <div className=' border border-primary bg-black bg-opacity-85 md:w-[70%] md:h-[80%] xs:w-[25rem] xs:h-[25rem] rounded-xl flex flex-col justify-center items-center'>
        <h1 className="lg:text-[2rem] xs:text-[1.7rem] font-Wayland text-center leading-7">GRACIAS DE TODO CORAZÓN POR <br/>
        QUERER SUMARTE A ESTE GRAN ACTO.
            </h1>

            <p className="font-StageGroteskRegular lg:px-40 xs:px-1 my-10 text-center leading-5">
            En este momento todos los espacios disponibles con
            nuestros abuelos han sido ocupados.
            </p>
            <p className="font-StageGroteskRegular lg:px-40 xs:px-1 my-10 text-center leading-5">
            Inténtalo en una próxima ocasión.
            </p>

        </div>
       

    </div>
  )
}

export default Agotados