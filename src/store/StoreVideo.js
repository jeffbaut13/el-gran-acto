import { create } from 'zustand';

const usePlayVideo = create((set) => ({
  playVideo: false,
  play: () => set(() => ({ playVideo: true })), // Cambia a true
  closeVideo: () => set(() => ({ playVideo: false })), // Cambia a false
}));

export default usePlayVideo;
