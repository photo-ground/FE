// store/mapStore.ts
import { create } from 'zustand';

interface MapState {
  center: [number, number];
  zoom: number;
  markers: any[]; // 마커 데이터
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setMarkers: (markers: any[]) => void;
}

export const useMapStore = create<MapState>((set) => ({
  center: [37.5511, 126.9407], // 기본 지도 중심
  zoom: 17, // 기본 줌 레벨
  markers: [],
  setCenter: (center) => set({ center }),
  setZoom: (zoom) => set({ zoom }),
  setMarkers: (markers) => set({ markers }),
}));
