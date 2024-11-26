import { create } from "zustand";

const usePlayVideo = create((set) => ({
  
  Loading: true,
  scrollIcon: true,
  playVideo: false,
  play: () => set(() => ({ playVideo: true })), // Cambia a true
  closeVideo: () => set(() => ({ playVideo: false })), // Cambia a false
  scrollShow: () => set(() => ({ scrollIcon: true })), // Cambia a true
  scrollHide: () => set(() => ({ scrollIcon: false })), // Cambia a false
  LoaderShow: () => set(() => ({ Loading: true })), // Cambia a true
  LoaderHide: () => set(() => ({ Loading: false })), // Cambia a false
}));

export default usePlayVideo;
