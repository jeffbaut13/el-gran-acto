import { getFirestore, collection, getDocs } from "firebase/firestore";

import { firestore } from "./firestore-config"; 

// Inicializa Firestore (asegúrate de que firebaseConfig esté configurado en tu proyecto)
const db = getFirestore();

const getBoletasCount = async () => {
  try {
    const boletasCollection = collection(firestore, "boletas");
    const snapshot = await getDocs(boletasCollection);
    
console.log(snapshot.size);

    return 

  } catch (error) {
    console.error("Error obteniendo el número de documentos:", error);
  }
};

export default getBoletasCount;
