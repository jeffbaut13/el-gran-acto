import React, { useState } from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import PrincipalMatch from "./PrincipalMatch";
import Preguntas from "./Preguntas";

const SectionAgendar = () => {
  const [componenteActual, setComponenteActual] = useState("PrincipalMatch");

  const renderizarComponente = () => {
    switch (componenteActual) {
      case "PrincipalMatch":
        return <PrincipalMatch cambiarComponente={setComponenteActual} />;
      case "Preguntas":
        return <Preguntas />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen relative flex justify-between flex-col py-12 px-20 snap-item">
      <AgendarBackGround />
      {renderizarComponente()}
    </div>
  );
};

export default SectionAgendar;
