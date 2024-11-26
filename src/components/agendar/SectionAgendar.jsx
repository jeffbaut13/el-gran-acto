import React, { useState } from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import PrincipalMatch from "./PrincipalMatch";
import Preguntas from "./Preguntas";

import { links } from "../header/MenuLink";


const SectionAgendar = ({reff}) => {
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
    <section ref={reff} id={`${links[1]}`} className="w-full h-screen relative flex justify-between py-12 px-20 snap-item">
      <AgendarBackGround />
      {renderizarComponente()}
    
   
      
    </section>
  );
};

export default SectionAgendar;
