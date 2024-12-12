export const PasoDos = ({
  HandleAudio,
  audio,
  setText,
  text,
  text2,
  setText2,
  handleGenerateAudio,
  loading,
  isAudioReady,
  back,
  isButtonDisabled,
  DedicateNumber,
}) => {
  const handleInputChange = (setter, value) => {
    const wordCount = value.trim().split(/\s+/).length;

    // Permitir cambios solo si hay 2 palabras o menos
    if (wordCount <= 2) {
      setter(value);
    }
  };
  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        SEGURO LO <br className="max-lg:hidden" />
        ESCUCHARÁN <br className="max-lg:hidden" />
        +DE<span className="font-neue">75</span> VECES
      </h2>
      <p className="py-6 leading-6 max-lg:text-center">
        {!isAudioReady
          ? "Escribe el nombre de la persona que siempre se acordará de ti cuando escuche esto."
          : "Si todo está correcto, selecciona 'Continuar'. Si necesitas corregir los datos, puedes seleccionar la opción 'Crear nuevo audio'."}
      </p>
      <div className="flex flex-col justify-between w-full gap-2">
        <input
          className="w-full py-2 px-3.5 border border-primary rounded-lg mb-6"
          type="text"
          placeholder="Tu nombre acá"
          value={text2}
          onChange={(e) => handleInputChange(setText2, e.target.value)}
        />
        <input
          className="w-full py-2 px-3.5 border border-primary rounded-lg mb-6"
          type="text"
          placeholder="A quién se la dedicas"
          value={text}
          onChange={(e) => handleInputChange(setText, e.target.value)}
        />
      </div>
      <div className="w-full flex justify-center max-lg:flex-col max-lg:my-6 items-center relative lg:gap-2 xs:gap-4 h-10">
        <button
          onClick={handleGenerateAudio}
          className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full ${
            loading || isButtonDisabled
              ? "opacity-15 pointer-events-none"
              : " opacity-100 pointer-events-auto"
          }`}
        >
          {audio ? "CREAR NUEVO AUDIO" : "CREAR MI DEDICATORIA"}
        </button>
        <button
          onClick={HandleAudio}
          className={`HoverButtons lg:text-sm w-full px-7 py-2 text-[1.2rem] h-full ${
            (  !isAudioReady)
              ? "opacity-15 pointer-events-none"
              : " opacity-100 pointer-events-auto bg-primary text-second"
          }`}
        >
          Continuar
        </button>
      </div>
      <div className="w-full flex justify-between mt-4 max-lg:hidden">
        <div />

        <div>
          {/* {isAudioReady && (
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
          )} */}
        </div>
      </div>
      <p className="w-full text-center font-StageGroteskBold pt-6">
        {DedicateNumber >= 1 && DedicateNumber < 2 ? (
          <>Te queda {2 - DedicateNumber} intento más</>
        ) : DedicateNumber >= 2 ? (
          <>Puedes volver a intertarlo en 24 horas</>
        ) : (
          <>Puedes realizar hasta 2 dedicatorias</>
        )}
      </p>
    </>
  );
};
