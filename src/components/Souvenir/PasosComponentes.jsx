import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import useAudioStore from "../../store/audioStore";
import { CombineAudios } from "./CombineAudios";

// Componentes de ejemplo
const Component0 = ({ HandleAudio }) => (
  <>
    <h2 className="font-Wayland text-[4.38rem] leading-[4rem]">
      UN REGALO <br />
      QUE SERÁ
      <br />
      UN CLÁSICO
    </h2>
    <p className="py-6 leading-6">
      Creamos este recuerdo que podrás personalizar <br />
      con la mejor foto de la persona que tanto quieres y <br />
      un mensaje único que tu abuelo, padre, o hijo <br />
      podrá ver y escuchar por siempre.
    </p>
    <button onClick={HandleAudio} className="px-7 py-1.5 text-[1.2rem]">
      PERSONALIZAR
    </button>
  </>
);
const Component1 = ({ HandleAudio, audio, setText }) => (
  <>
    <h2 className="font-Wayland text-[4.38rem] leading-[4rem]">
      SEGURO LO <br />
      ESCUCHARÁN <br />
      +DE<span className="font-BebasNeue">75</span> VECES
    </h2>
    <p className="py-6 leading-6">
      Escribe el nombre de la persona que siempre <br />
      se acordará de ti cuando escuche esto.
    </p>
    <input
      className=" max-w-96 py-2 px-3.5 border border-primary rounded-xl mb-6"
      type="text"
      placeholder="Ingresa el nombre aquí"
      onChange={(e) => setText(e.target.value)}
    />
    <div className="w-1/2 flex justify-between">
      {audio && (
        <button onClick={HandleAudio} className="px-7 py-1.5 text-[1.2rem]">
          SIGUIENTE
        </button>
      )}
      <button onClick={HandleAudio} className="px-7 py-1.5 text-[1.2rem]">
        CONFIRMAR
      </button>
    </div>
  </>
);
const Component2 = () => <CombineAudios />;
const Component3 = () => <div>Componente 3</div>;

export const PasosComponentes = ({
  activePaso,
  setActivePaso,
  setAudio,
  audio,
  handleButtonClick,
}) => {
  const [text, setText] = useState("");
  // Arreglo con los componentes
  const components = [Component0, Component1, Component2, Component3];

  // Obtener el componente correspondiente
  const ActiveComponent = components[activePaso];

  const { generateAndCombineAudio } = useAudioStore();

  const handleGenerateAudio = async (eventFunction) => {
    if (text == "") {
      alert("ingresa un nombre");
      return;
    } else {
      await generateAndCombineAudio(
        `Hola ${text}, alguien muy especial te ha dedicado esta cancion por que te quiere mucho.`
      );
      //eventFunction();
    }
  };

  const HandleAudio = () => {
    if (activePaso == 1 && !audio) {
      handleGenerateAudio();
      setAudio(true);
    } else {
      if (text != "") handleButtonClick(activePaso + 1);
    }
    if (activePaso == 0) {
      handleButtonClick(activePaso + 1);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".fade",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  }, [activePaso]);

  return (
    <div className="w-full pl-20 fade">
      {ActiveComponent && (
        <ActiveComponent
          HandleAudio={HandleAudio}
          audio={activePaso == 1 ? audio : null}
          setText={activePaso == 1 ? setText : null}
        />
      )}
    </div>
  );
};
