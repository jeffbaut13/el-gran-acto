import { useState } from "react";

export const CombineAudios = () => {
  const [audio1, setAudio1] = useState("/audios/cancion1.mp3");
  const [audio2, setAudio2] = useState("/audios/cancion2.mp3");
  const [combinedAudio, setCombinedAudio] = useState(null); // Estado para almacenar el nuevo MP3

  const handleUpload = async () => {
    const formdata = new FormData();

    // Función para obtener un Blob desde el archivo de audio
    const fetchAudioBlob = async (audioPath) => {
      const response = await fetch(audioPath);
      if (!response.ok) throw new Error(`Error al obtener el audio: ${audioPath}`);
      return await response.blob();
    };

    try {
      const audioBlob1 = await fetchAudioBlob(audio1);
      const audioBlob2 = await fetchAudioBlob(audio2);

      formdata.append("audioFiles", audioBlob1, "audio1.mp3");
      formdata.append("audioFiles", audioBlob2, "audio2.mp3");

      const response = await fetch("http://localhost:3000/combine-audios", {
        method: "POST",
        body: formdata,
      });

      if (!response.ok) throw new Error("Error al combinar los audios");

      const combinedBlob = await response.blob(); // Convertir la respuesta en Blob
      const url = URL.createObjectURL(combinedBlob); // Crear URL para el Blob

      // Guardar la URL del audio combinado en el estado
      setCombinedAudio(url);
    } catch (error) {
      console.error("Error uploading audio files:", error);
    }
  };

  return (
    <div>
      <button onClick={handleUpload}>Enviar audios</button>
      {combinedAudio && (
        <div>
          <h3>Audio combinado:</h3>
          <audio controls src={combinedAudio}></audio>
        </div>
      )}
    </div>
  );
};
