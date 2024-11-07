import axios from "axios";
import { useState } from "react";

function ElevenLabs() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleInputChange = (event) => setText(event.target.value);

  const handleGenerateAudio = async () => {
    try {
      const data = JSON.stringify({
        "text": text || "esto es un audio grabado para el equipo de Inter Rapidisimo, necesito dinero para iniciar labores",
      });

      const config = {
        method: 'post',
        url: 'https://api.elevenlabs.io/v1/text-to-speech/J3JSkWXJwqClE1dIxQM9',
        headers: { 
          'xi-api-key': 'sk_cc1d9a10ea76648950b4830364e7b302769fed6ff6f7e846',
          'Accept': 'audio/mpeg', 
          
          'Content-Type': 'application/json'
        },
        data: data,
        responseType: 'blob', // Necesario para manejar el audio como archivo binario
      };
      
      const response = await axios.request(config);
      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioUrl(audioUrl); // Guarda la URL del audio en el estado
    } catch (error) {
      console.error("Error al generar el audio:", error);
    }
  };

  return (
    <div className="font-myFont">
      <h1>Generar Audio con ElevenLabs</h1>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Escribe el texto aquí..."
      />
      <button onClick={handleGenerateAudio}>Generar Audio</button>
      {audioUrl && <audio src={audioUrl} controls autoPlay />}
    </div>
  );
}

export default ElevenLabs;
