import axios from "axios";

/**
 * Genera un audio usando ElevenLabs API basado en un texto.
 * @param {string} text - El texto que se convertirá en audio.
 * @returns {Promise<string>} URL del audio generado.
 */
export async function generateAudio(text) {
  if (!text) {
    throw new Error("El texto no puede estar vacío.");
  }

  const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
  const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;

  if (!apiKey || !voiceId) {
    throw new Error("Faltan las variables de entorno para la API de ElevenLabs.");
  }

  try {
    const data = JSON.stringify({ text });
    const config = {
      method: "post",
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      headers: {
        "xi-api-key": apiKey,
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
      },
      data: data,
      responseType: "blob", // Manejar la respuesta como archivo binario
    };

    const response = await axios.request(config);
    const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
    return URL.createObjectURL(audioBlob); // Devuelve la URL del blob generado
  } catch (error) {
    console.error("Error al generar el audio:", error);
    throw error;
  }
}
