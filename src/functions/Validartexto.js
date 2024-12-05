export const isValidText = (text) => {
  if (!text) return false; // No permitir texto vacío
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,20}$/; // Solo letras y espacios (máximo 20 caracteres)
  const words = text.trim().split(/\s+/); // Separar por palabras
  return regex.test(text) && words.length <= 2; // Validar formato y máximo dos palabras
};