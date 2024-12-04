export const PasoCuatro = ({back} ) => {
  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        ASÍ SE VE <br />
        UN REGALO <br />
        CLÁSICO
      </h2>
      <button 
      //onClick={openFileDialog} 
      className="my-6 py-2 px-12 max-lg:mx-auto">
           Ir a pagar
          </button>
      <div className="w-full flex justify-between mt-4">
        <div className="">
          <button
            onClick={back}
            className="w-8 h-8 inline-block p-1.5 rounded-full rotate-180 HoverButtons group relative"
            //className="absolute w-8 h-8 inline-block -left-14 p-1.5 rounded-full rotate-180 HoverButtons group"
          >
            <img
              className="easeHove group-hover:invert "
              src="/iconos/arrow-slide.svg"
              alt=""
            />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs rotate-180">
              Volver
            </span>
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};
