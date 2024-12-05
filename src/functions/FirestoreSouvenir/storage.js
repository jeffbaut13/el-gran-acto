import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore , storage } from "../../components/firestore/firestore-config";

export const enviarDatosAFirebase = async ({ email, audio, imagen, promoId }) => {
  try {
    // Crear referencias en Storage
    const audioRef = ref(storage, `souvenir/audios/${audio.name}`);
    const imagenRef = ref(storage, `souvenir/imagenes/${imagen.name}`);

    // Subir audio e imagen
    const audioSnapshot = await uploadBytes(audioRef, audio);
    const imagenSnapshot = await uploadBytes(imagenRef, imagen);

    // Obtener URLs de descarga
    const audioURL = await getDownloadURL(audioSnapshot.ref);
    const imagenURL = await getDownloadURL(imagenSnapshot.ref);

    // Crear registro en Firestore
    const docRef = await addDoc(collection(firestore, "souvenir"), {
      email,
      audio: audioURL,
      imagen: imagenURL,
      promoId,
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
    id: idGenerado,
  };
  const queryString = Object.keys(dataSend)
    .map((key) => `${key}=${encodeURIComponent(dataSend[key])}`)
    .join("&");

  const urlAlcarrito = "https://www.alcarrito.com/promo/addtocart";
  window.location.href = `${urlAlcarrito}?${queryString}`;
};

