import { create } from "zustand";

const usePlayVideo = create((set) => ({
  scrollIcon: true,
  playVideo: false,
  play: () => set(() => ({ playVideo: true })), // Cambia a true
  closeVideo: () => set(() => ({ playVideo: false })), // Cambia a false
  scrollShow: () => set(() => ({ scrollIcon: true })), // Cambia a true
  scrollHide: () => set(() => ({ scrollIcon: false })), // Cambia a false
}));

export default usePlayVideo;
