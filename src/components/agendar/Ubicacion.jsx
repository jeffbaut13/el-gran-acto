import React from 'react'

const Ubicacion = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-20 ">
        <div className=' flex gap-5 '>

        <div className=' w-[30%] h-full border border-primary rounded-xl flex flex-col items-center justify-center px-10 py-5'>
           <div className='w-full rounded-xl fle'>
            <img className=' w-full rounded-xl' src='/imagenes/ancianato.jpg' />
            </div> 
            <div className=' '>
            <span className="flex gap-2 mt-4">
              <img className="w-4" src="/iconos/ubicacion.svg" />
              <p>Facatativa, Cundinamarca</p>
            </span>
            <h1 className=" font-Wayland text-[1.5rem] leading-7">CENTRO DE BIENESTAR
            DEL ANCIANO SAN JOSÉ</h1>
            <p className=" font-Wayland text-[1.2rem]">Cra. 6 #6-29</p>
            <p className=' text-[0.8rem]'>Dedicado a cuidar con cariño a los adultos mayores, ofreciendo un espacio seguro y lleno de calidad de vida. Aquí encuentran actividades divertidas, apoyo médico y psicológico, y oportunidades para compartir y disfrutar en comunidad, siempre con respeto a su dignidad y autonomía.</p>
            <div className=" w-full flex items-center justify-center">
            </div>
          </div>

        </div>
        <div className=' w-[70%] h-full border border-primary rounded-xl'>
            <iframe className=' w-full h-full rounded-xl '  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.448158959887!2d-74.3549195252076!3d4.81277469516268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7c675128f6f1%3A0xe781fcd43fd83027!2sCentro%20De%20Bienestar%20del%20Anciano%20San%20Jose!5e1!3m2!1ses-419!2sco!4v1731619255794!5m2!1ses-419!2sco">

            </iframe>
{/*             <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 */}        </div>
        </div>
        <button className=' w-[12rem] py-2 text-[1.4rem] flex-none mt-3 HoverButtons'>CONOCE LOS CLÁSICOS</button>

    </div>
  )
}

export default Ubicacion