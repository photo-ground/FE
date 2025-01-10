import { create } from 'zustand';

// State 타입 정의
interface SpotState {
  spotId: number | null; // 초기값은 null로 설정
}

// Action 타입 정의
interface SpotActions {
  setSpotId: (id: number) => void; // spotId 설정 함수
  clearSpotId: () => void; // spotId 초기화 함수
}

// Zustand Store 생성
const useSpotStore = create<SpotState & SpotActions>((set) => ({
  // States
  spotId: null,

  // Actions
  setSpotId: (id) => set({ spotId: id }),
  clearSpotId: () => set({ spotId: null }),
}));

export default useSpotStore;
