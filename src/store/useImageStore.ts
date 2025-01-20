// src/store/useImageStore.ts
import { create } from 'zustand';

interface ImageStore {
  // 게시글 업로드 - 이미지 다중 선택 시, 이미지 리스트 데이터 컨트롤
  images: File[];
  setImages: (newImages: File[]) => void;
  addImage: (newImage: File) => void;
  removeImage: (index: number) => void;

  // 게시글 업로드 - 이미지 별 포토 스팟 선택시, 스팟 아이디 리스트 데이터 컨트롤
  spotIds: number[];
  setSpotIds: (newSpotIds: number[]) => void;
  selectSpotId: (index: number, newSpotId: number) => void;
  removeSpotId: (newSpotId: number) => void;
}

const useImageStore = create<ImageStore>((set) => ({
  images: [],
  spotIds: [],
  setImages: (newImages) => set({ images: newImages }),
  addImage: (newImage) =>
    set((state) => ({ images: [...state.images, newImage] })),
  removeImage: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    })),
  setSpotIds: (newSpotIds) => set({ spotIds: newSpotIds }),
  selectSpotId: (index, newSpotId) =>
    set((state) => ({
      spotIds: state.spotIds.map((spotId, i) =>
        i === index ? newSpotId : spotId,
      ),
    })),
  removeSpotId: (index) =>
    set((state) => ({
      spotIds: state.spotIds.filter((_, i) => i !== index),
    })),
}));

export default useImageStore;
