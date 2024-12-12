import { firestore } from "../../firestore/firestore-config";
import Formulario from "../FormAlcarrito";
import { query, where, getDocs, collection } from "firebase/firestore";

export const PasoCuatro = ({ back }) => {
  
  return (
    <>
      <h2 className="font-Wayland titles max-lg:text-center">
        ASÍ SE VE <br />
        UN REGALO <br />
        CLÁSICO
      </h2>
      <Formulario back={back} />

      
    </>
  );
};
