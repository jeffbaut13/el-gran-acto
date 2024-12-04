import { create } from "zustand";
import axios from "axios";

const useAudioStore = create((set, get) => ({
  audioUrl: null,
  isAudioReady: false,
  combinedAudioUrl: null, // Nueva URL del audio combinado

  // Generar audio con ElevenLabs y combinarlo con un MP3 local
  generateAndCombineAudio: async (text) => {
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;
    const localAudioPath = "/audios/cancion2.mp3";

    // Simular la llamada a la API de generación de audio
    set({
      isAudioReady: false,
    });

    const fetchAudioBlob = async (audioPath) => {
      const response = await fetch(audioPath);
      if (!response.ok)
        throw new Error(`Error al obtener el audio: ${audioPath}`);
      return await response.blob();
    };

    if (!text) {
      console.error("El texto no puede estar vacío.");
      return;
    }

    try {
      // Paso 1: Generar audio con ElevenLabs
      const formdata = new FormData();

      const data = JSON.stringify({ text, model_id: "eleven_multilingual_v2" });
      const config = {
        method: "post",
        url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        headers: {
          "xi-api-key": apiKey,
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
        },
        data: data,
        responseType: "blob",
      };

      const response = await axios.request(config);
      const generatedAudioBlob = new Blob([response.data], {
        type: "audio/mpeg",
      });

      const audioBlob2 = await fetchAudioBlob(localAudioPath);

      try {
        formdata.append("audioFiles", generatedAudioBlob, "audio1.mp3");
        formdata.append("audioFiles", audioBlob2, "audio2.mp3");

        const response = await fetch("http://localhost:3000/combine-audios", {
          method: "POST",
          body: formdata,
        });
        /* const response = await fetch("https://backboletas.onrender.com/combine-audios", {
          method: "POST",
          body: formdata,
        }); */

        if (!response.ok) throw new Error("Error al combinar los audios");

        const combinedBlob = await response.blob(); // Convertir la respuesta en Blob
        const url = URL.createObjectURL(combinedBlob); // Crear URL para el Blob

        // Guardar la URL del audio combinado en el estado
        set({
          combinedAudioUrl: url,
          isAudioReady: true,
        });
      } catch (error) {
        console.error("Error uploading audio files:", error);
      }
    } catch (error) {
      console.error("Error al generar o combinar el audio:", error);
    }
  },

  generateAndCombineAudioTest: async (text) => {
    // Simular la llamada a la API de generación de audio
    set({
      isAudioReady: false,
    });

    const simulateApiCall = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Simulated API response");
        }, 1000); // Simula un retraso de 1 segundo
      });
    };

    if (!text) {
      console.error("El texto no puede estar vacío.");
      return;
    }

    try {
      console.log("Simulando la generación de audio...");
      const simulatedResponse = await simulateApiCall();
      console.log("Respuesta simulada:", simulatedResponse);

      const formdata = new FormData();
      const generatedAudioBlob = new Blob(["Simulated audio 1"], {
        type: "audio/mpeg",
      });
      const audioBlob2 = new Blob(["Simulated audio 2"], {
        type: "audio/mpeg",
      });

      try {
        formdata.append("audioFiles", generatedAudioBlob, "audio1.mp3");
        formdata.append("audioFiles", audioBlob2, "audio2.mp3");

        // Simular la combinación de audios
        console.log("Simulando la combinación de audios...");
        const combineResponse = await simulateApiCall();
        console.log("Respuesta simulada de combinación:", combineResponse);

        // Crear una URL para simular el audio combinado
        const combinedBlob = new Blob(["Simulated combined audio"], {
          type: "audio/mpeg",
        });
        const url = URL.createObjectURL(combinedBlob);

        // Guardar la URL del audio combinado en el estado
        set({
          combinedAudioUrl: url,
          isAudioReady: true,
        });
      } catch (error) {
        console.error("Error uploading audio files:", error);
      }
    } catch (error) {
      console.error("Error al generar o combinar el audio:", error);
    }
  },
}));

export default useAudioStore;