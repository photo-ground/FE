import { create } from 'zustand';

// State 타입 정의
interface SpotState {
  currPostIdIndex: number | null; // 초기값은 null로 설정
}

// Action 타입 정의
interface SpotActions {
  setCurrPostIdIndex: (id: number) => void; // currPostIdIndex 설정 함수
  clearCurrPostIdIndex: () => void; // currPostIdIndex 초기화 함수
}

// Zustand Store 생성
const useSpotStore = create<SpotState & SpotActions>((set) => ({
  // States
  currPostIdIndex: null,

  // Actions
  setCurrPostIdIndex: (id) => set({ currPostIdIndex: id }),
  clearCurrPostIdIndex: () => set({ currPostIdIndex: null }),
}));

export default useSpotStore;
