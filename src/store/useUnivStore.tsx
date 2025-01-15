// Directory: /app/counter/_store/index.ts

import { create } from 'zustand';

// State types
interface States {
  univ: string;
}

// Action types
interface Actions {
  setUniv: (newUniv: string) => void; // 상태를 업데이트하는 액션 추가
  // decrease: () => void;
}

// useSchoolStore
const useUnivStore = create<States & Actions>((set) => ({
  // States
  // TODO : 로그인 한 경우 - 회원가입시의 학교 기준
  // TODO : 로그인 안 한 경우 - onboarding에서 선택한 학교 기준
  univ: 'yonsei',

  // Actions
  setUniv: (newUniv) => set(() => ({ univ: newUniv })), // 상태 업데이트 로직
  // decrease: () => set((state) => ({ school: state.school - 1 })),
}));

export default useUnivStore;
