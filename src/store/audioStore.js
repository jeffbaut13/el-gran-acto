import { create } from "zustand";
import axios from "axios";

const useAudioStore = create((set, get) => {
  // Función para verificar si han pasado 24 horas
  const checkAndResetDedicateNumber = () => {
    const lastResetTime = localStorage.getItem("DedicateNumberResetTime");
    if (lastResetTime) {
      const lastResetDate = new Date(lastResetTime);
      const now = new Date();
      const differenceInHours = (now - lastResetDate) / (1000 * 60 * 60);

      if (differenceInHours >= 24) {
        // Reiniciar DedicateNumber y actualizar el tiempo
        localStorage.setItem("DedicateNumber", "0");
        localStorage.setItem("DedicateNumberResetTime", now.toISOString());
        set({ DedicateNumber: 0 });
      }
    } else {
      // Si no hay tiempo registrado, inicializarlo
      localStorage.setItem("DedicateNumberResetTime", new Date().toISOString());
    }
  };

  return {
    audioUrl: null,
    isAudioReady: false,
    combinedAudioUrl: null,
    urlFirabesAudio: null,
    DedicateNumber: parseInt(localStorage.getItem("DedicateNumber") || "0", 10),

    checkAndResetDedicateNumber, // Exponer el método para usarlo en el componente

    generateAndCombineAudio: async (text) => {
      const { DedicateNumber } = get();

      // Verificar si el estado DedicateNumber ya alcanzó el límite
      if (DedicateNumber >= 2) {
        alert("Ya se agotaron las opciones de generar audio.");
        return;
      }

      const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
      const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;
      const localAudioPath = "/audios/+de75-recorte.mp3";

      set({ isAudioReady: false });

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
        const formdata = new FormData();
        const data = JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
        });
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

          const response = await fetch(
            "https://backboletas.onrender.com/combine-audios",
            {
              method: "POST",
              body: formdata,
            }
          );

          if (!response.ok) throw new Error("Error al combinar los audios.");

          const combinedBlob = await response.blob();
          const url = URL.createObjectURL(combinedBlob);

          set({
            combinedAudioUrl: url,
            urlFirabesAudio: combinedBlob,
            isAudioReady: true,
          });

          // Incrementar DedicateNumber y actualizar en localStorage
          const newDedicateNumber = DedicateNumber + 1;
          set({ DedicateNumber: newDedicateNumber });
          localStorage.setItem("DedicateNumber", newDedicateNumber.toString());
        } catch (error) {
          console.error("Error uploading audio files:", error);
        }
      } catch (error) {
        console.error("Error al generar o combinar el audio:", error);
      }
    },
  };
});

export default useAudioStore;
