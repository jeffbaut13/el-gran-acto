import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import useAudioStore from "../../store/audioStore";

import { isValidText } from "../../functions/Validartexto";

import { PasoUno } from "./Pasos/PasoUno";
import { PasoTres } from "./Pasos/PasoTres";
import { PasoCuatro } from "./Pasos/PasoCuatro";
import { PasoDos } from "./Pasos/PasoDos";

// Componentes de ejemplo
 
const Component1 = ({
  HandleAudio,
  audio,
  setText,
  setText2,
  handleGenerateAudio,
  loading,
  isAudioReady,
  back,
  isButtonDisabled,
}) => (
  <PasoDos
    HandleAudio={HandleAudio}
    audio={audio}
    setText={setText}
    setText2={setText2}
    handleGenerateAudio={handleGenerateAudio}
    loading={loading}
    isAudioReady={isAudioReady}
    back={back}
    isButtonDisabled={isButtonDisabled}
  />
);
const Component2 = ({HandleAudio, back}) => <PasoTres  back={back} HandleAudio={HandleAudio}/>;
const Component3 = ({  back}) => <PasoCuatro back={back}  />;

export const PasosComponentes = ({
  activePaso,
  setActivePaso,
  setAudio,
  audio,
  handleButtonClick,
}) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Arreglo con los componentes
  const components = [  Component1, Component2, Component3];
  useEffect(() => {
    // Actualiza el estado del botón según la validación
    setIsButtonDisabled(!isValidText(text) || !isValidText(text2));
  }, [text, text2]); // Se ejecuta cada vez que cambian text o text2

  // Obtener el componente correspondiente
  const ActiveComponent = components[activePaso];

  const { generateAndCombineAudio, isAudioReady, generateAndCombineAudioTest } =
    useAudioStore();

  const handleGenerateAudio = async () => {
    if (text == "") {
      alert("ingresa un nombre");
      return;
    } else {
      if (text != "") setAudio(true);
      setLoading(true);
      await generateAndCombineAudio(
        `Hola ${text}, ${text2}, que te quiere mucho te dedica esta canción porque nunca se va a olvidar de ti.`
      );
     /*  await generateAndCombineAudioTest(
        `Hola ${text}, alguien muy especial te ha dedicado esta cancion por que te quiere mucho.`
      ); */
      setLoading(false);
    }
  };

  const HandleAudio = () => {
    if (activePaso == 1 && !audio) {
      setAudio(true);
    } else {
      if (text != "") handleButtonClick(activePaso + 1);
    }
    if (activePaso >= 0) {
      handleButtonClick(activePaso + 1);
    }
  };
  const back = () => {
    handleButtonClick(activePaso - 1);
  };

  useEffect(() => {
    gsap.fromTo(
      ".fade",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  }, [activePaso]);

  return (
    <div className="lg:w-[65%] xs:w-full lg:pl-20 max-lg:px-10 fade">
      {ActiveComponent && (
        <ActiveComponent
          HandleAudio={HandleAudio}
          audio={activePaso == 0 ? audio : null}
          setText={activePaso == 0 ? setText : null}
          setText2={activePaso == 0 ? setText2 : null}
          isButtonDisabled={activePaso == 0 ? isButtonDisabled : null}
          handleGenerateAudio={activePaso == 0 ? handleGenerateAudio : null}
          loading={activePaso == 0 ? loading : null}
          isAudioReady={activePaso == 0 ? isAudioReady : null}
          back={back}
        />
      )}
    </div>
  );
};
