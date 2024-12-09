import create from "zustand";

export const useAppState = create((set) => ({
  email: "",
  audio: "",
  imagen: "/imagenes/file.webp",
  ordenId: "",
  estadoOrden: false,
  promoId: "granacto",
  setAppState: (newState) => set((state) => ({ ...state, ...newState })),
}));
