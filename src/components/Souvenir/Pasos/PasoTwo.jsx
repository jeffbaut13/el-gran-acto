export const PasoTwo = ({
  HandleAudio,
  audio,
  setText,
  setText2,
  handleGenerateAudio,
  loading,
  isAudioReady,
  back,
  isButtonDisabled,
}) => {
  return (
    <>
      <h2 className="font-Wayland text-[4.38rem] leading-[4rem]">
        SEGURO LO <br />
        ESCUCHARÁN <br />
        +DE<span className="font-BebasNeue">75</span> VECES
      </h2>
      <p className="py-6 leading-6">
        {!isAudioReady
          ? "Escribe el nombre de la persona que siempre se acordará de ti cuando escuche esto."
          : "Si todo está correcto, selecciona 'Continuar'. Si necesitas corregir los datos, puedes seleccionar la opción 'Crear nuevo audio'."}
        
      </p>
      <div className="flex flex-col justify-between w-full gap-2">
        <input
          className="w-full py-2 px-3.5 border border-primary rounded-lg mb-6"
          type="text"
          placeholder="Tu nombre acá"
          onChange={(e) => setText2(e.target.value)}
        />
        <input
          className="w-full py-2 px-3.5 border border-primary rounded-lg mb-6"
          type="text"
          placeholder="A quién se la dedicas"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center items-center relative">
        <button
          onClick={handleGenerateAudio}
          className={`HoverButtons text-sm w-full px-7 py-2 text-[1.2rem] ${
            loading || isButtonDisabled
              ? "opacity-15 pointer-events-none"
              : " opacity-100 pointer-events-auto"
          }`}
        >
          {audio ? "CREAR NUEVO AUDIO" : "GENERAR MI DEDICATORIA"}
        </button>
      </div>
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
        <div className="">
          {isAudioReady && (
            <button
              onClick={HandleAudio}
              className={`HoverButtons relative w-8 h-8 inline-block p-1.5 rounded-full HoverButtons group ${
                loading || isButtonDisabled
                  ? "opacity-15 pointer-events-none"
                  : " opacity-100 pointer-events-auto"
              }`}
            >
              <img
                className="easeHove group-hover:invert "
                src="/iconos/arrow-slide.svg"
                alt=""
              />{" "}
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs">
                Continuar
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
