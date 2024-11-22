import React from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import { Link, NavLink } from "react-router-dom";
import PrincipalMatch from "./PrincipalMatch";


const SectionAgendar = () => {
  return (
    <div className="w-full h-screen relative flex justify-between flex-col py-12 px-20 snap-item">
      <AgendarBackGround />
      <PrincipalMatch />
      
    </div>
  );
};

export default SectionAgendar;
