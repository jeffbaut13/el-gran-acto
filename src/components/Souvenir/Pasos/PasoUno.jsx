export const PasoUno = ({ HandleAudio }) => {
  return (
    <>
      <h2 className="font-Wayland text-[4.38rem] leading-[4rem]">
        UN REGALO <br />
        QUE SERÁ
        <br />
        UN CLÁSICO
      </h2>
      <p className="pt-6 leading-6">
        Creamos este recuerdo que podrás personalizar <br />
        con la mejor foto de la persona que tanto quieres y <br />
        un mensaje único que tu abuelo, padre, o hijo <br />
        podrá ver y escuchar por siempre.
      </p>
      <h6 className="py-6">$<span className="font-BebasNeue text-4xl">120.000</span></h6>
      <button onClick={HandleAudio} className="px-7 py-1.5 text-[1.2rem]">
        PERSONALIZAR
      </button>
    </>
  );
};
