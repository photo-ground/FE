// src/store/useImageStore.ts
import { create } from 'zustand';

interface ImageStore {
  images: string[];
  setImages: (newImages: string[]) => void;
  addImage: (newImage: string) => void;
  removeImage: (index: number) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  images: [],
  setImages: (newImages) => set({ images: newImages }),
  addImage: (newImage) =>
    set((state) => ({ images: [...state.images, newImage] })),
  removeImage: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    })),
}));

export default useImageStore;
