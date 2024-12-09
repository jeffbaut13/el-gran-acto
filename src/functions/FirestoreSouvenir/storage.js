import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  firestore,
  storage,
} from "../../components/firestore/firestore-config";
import { v4 as uuidv4 } from "uuid";

const generarURLsUnicas = () => {
  const uniqueId = uuidv4(); // Genera un identificador único
  return {
    audioPath: `souvenir/audios/${uniqueId}-audio.mp3`,
    imagenPath: `souvenir/imagenes/${uniqueId}-image.jpeg`,
  };
};

const base64ToBlob = (base64) => {
  // Separar la parte base64 del prefijo
  const byteString = atob(base64.split(",")[1]); // Decodificar la parte base64
  const mimeString = base64.split(",")[0].split(":")[1].split(";")[0]; // Obtener el tipo MIME

  // Crear un ArrayBuffer para almacenar los datos binarios
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  // Llenar el ArrayBuffer con los datos decodificados
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // Crear un Blob a partir de los datos binarios
  return new Blob([ab], { type: mimeString });
};

export const enviarDatosAFirebase = async ({
  email,
  audio,
  imagen,
  promoId,
  idGenerado,
}) => {
  const image = base64ToBlob(imagen);

  const { audioPath, imagenPath } = generarURLsUnicas();

  try {
    // Crear referencias en Storage
    const audioRef = ref(storage, audioPath);
    const imagenRef = ref(storage, imagenPath);

    // Subir audio e imagen
    const audioSnapshot = await uploadBytes(audioRef, audio);
    const imagenSnapshot = await uploadBytes(imagenRef, image);

    // Obtener URLs de descarga
    const audioURL = await getDownloadURL(audioSnapshot.ref);
    const imagenURL = await getDownloadURL(imagenSnapshot.ref);

    // Crear registro en Firestore
    const docRef = await addDoc(collection(firestore, "souvenir"), {
      userId: email + "_" + idGenerado,
      email,
      audio: audioURL,
      imagen: imagenURL,
      promoId,
      numeroOrden: "",
      stock: "",
      orderStatus:"",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docRef.id; // Retornar el ID del documento creado
  } catch (error) {
    console.error("Error al enviar datos a Firebase:", error);
    throw error;
  }
};

export const redireccionar = (promoId, email, idGenerado) => {
  
  const dataSend = {
    email,
    promoid: promoId,
    userId: email + "_" + idGenerado,
  };
  const queryString = Object.keys(dataSend)
    .map((key) => `${key}=${encodeURIComponent(dataSend[key])}`)
    .join("&");

  const urlAlcarrito = "https://www.alcarrito.com/promo/addtocart";
  window.location.href = `${urlAlcarrito}?${queryString}`;

};
