import React from "react";
import { AgendarBackGround } from "./AgendarBackGround";
import { Link, NavLink } from "react-router-dom";
import PrincipalMatch from "./PrincipalMatch";
import { links } from "../header/MenuLink";


const SectionAgendar = ({reff}) => {
  return (
    <section ref={reff} id={`${links[1]}`} className="w-full h-screen relative flex justify-between flex-col py-12 px-20 snap-item">
      <AgendarBackGround />
      <PrincipalMatch />
      
    </section>
  );
};

export default SectionAgendar;
