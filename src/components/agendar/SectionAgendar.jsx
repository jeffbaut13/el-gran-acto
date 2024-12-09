import React, { useState } from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import PrincipalMatch from "./PrincipalMatch";
import Preguntas from "./Preguntas";
import Reagendar from "./Reagendar"; // Importa el componente Reagendar

import { links } from "../header/MenuLink";

const SectionAgendar = ({ reff }) => {
  const [componenteActual, setComponenteActual] = useState("PrincipalMatch");

  const renderizarComponente = () => {
    switch (componenteActual) {
      case "PrincipalMatch":
        return <PrincipalMatch cambiarComponente={setComponenteActual} />;
      case "Preguntas":
        return <Preguntas />;
      case "Reagendar": // Agrega el caso para Reagendar
        return <Reagendar />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={reff}
      id={`${links[1]}`}
      className="w-full h-screen relative flex justify-between py-12 p-responsive snap-item"
    >
      <AgendarBackGround />
      {renderizarComponente()}
    </section>
  );
};

export default SectionAgendar;
