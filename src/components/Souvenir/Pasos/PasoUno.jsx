export const PasoUno = ({ HandleAudio, btn }) => {
  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        UN REGALO <br className="max-lg:hidden" />
        QUE SERÁ <br className="max-lg:hidden" />
        UN CLÁSICO
      </h2>
      <p className="pt-6 leading-6 max-lg:text-center">
        Creamos este recuerdo que podrás personalizar{" "}
        <br className="max-lg:hidden" />
        con la mejor foto de la persona que tanto quieres y{" "}
        <br className="max-lg:hidden" />
        un mensaje único que tu abuelo, padre, o hijo{" "}
        <br className="max-lg:hidden" />
        podrá ver y escuchar por siempre.
      </p>
      <div className="flex items-center justify-center max-lg:w-[72%] max-lg:mx-auto border border-primary rounded-lg py-1 px-3 mt-6 text-xs">
        <div className="flex flex-col items-center justify-center ml-6 pr-6 border-r border-primary">
          <span>Ancho</span>
          <span>14,3 cm</span>
        </div>
        <div className="flex flex-col items-center justify-center lg:mx-8 xs:mx-10">
          <span>Alto</span>
          <span>6,9 cm</span>
        </div>
        <div className="flex flex-col items-center justify-center mr-6 pl-6 border-l border-primary">
          <span>Largo</span>
          <span>7 cm</span>
        </div>
      </div>
      <h6 className="py-6 max-lg:w-full max-lg:text-center">
        $<span className="font-neue text-4xl">99.900</span>
      </h6>
      {/* <p>Esta entrega viene en camino y pronto podrás tenerla en casa.</p> */}

      {btn}
    </>
  );
};
