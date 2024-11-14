import React, { useState } from "react";
import { MatchBackGround } from "../components/agendar/MatchBackGround";
import SeleccionarFecha from "../components/agendar/SeleccionarFecha";
import DatosVisita from "../components/agendar/DatosVisita";
import ConfirmacionCita from "../components/agendar/ConfirmacionCita";
import Ubicacion from "../components/agendar/Ubicacion";



  const Match = () => {
    const [step, setStep] = useState("seleccionarFecha"); // Controla qué componente mostrar
  
    // Función para cambiar a la vista de DatosVisita
    const handleAgendarVisita = () => {
      setStep("datosVisita");
    };

     // Función para cambiar a la vista de ConfirmacionCita
  const handleRegistro = () => {
    setStep("confirmacionCita");
  };

  const handleUbicacion = () => {
    setStep("ubicacion");
  };

  return (
    <div className="w-full h-screen flex py-12 px-20 ">
     <MatchBackGround />
    {step === "seleccionarFecha" && (
        <SeleccionarFecha onAgendarClick={handleAgendarVisita} />
      )}
      {step === "datosVisita" && <DatosVisita onRegistroClick={handleRegistro} />}
      {step === "confirmacionCita" && <ConfirmacionCita onUbiClick={handleUbicacion}/>}
      {step === "ubicacion" && <Ubicacion />}
      
       
     
      

       {/* <Ubicacion />  */}
 
 </div>
  );
};

export default Match;
