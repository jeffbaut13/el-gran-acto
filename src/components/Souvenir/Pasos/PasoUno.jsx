export const PasoUno = ({ HandleAudio, btn }) => {
  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        UN REGALO <br className="max-lg:hidden"/>
        QUE SERÁ {" "} 
        <br className="max-lg:hidden"/>
        UN CLÁSICO
      </h2>
      <p className="pt-6 leading-6 max-lg:text-center">
        Creamos este recuerdo que podrás personalizar  <br className="max-lg:hidden"/>
        con la mejor foto de la persona que tanto quieres y  <br className="max-lg:hidden"/>
        un mensaje único que tu abuelo, padre, o hijo  <br className="max-lg:hidden"/>
        podrá ver y escuchar por siempre.
      </p>
      <h6 className="py-6 max-lg:w-full max-lg:text-center">$<span className="font-BebasNeue text-4xl">99.900</span></h6>
      {btn}
    </>
  );
};
