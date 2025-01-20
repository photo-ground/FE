// Directory: /app/counter/_store/index.ts

import { create } from 'zustand';

// State types
interface States {
  isLoggedIn: boolean; // 로그인 여부

  univ: string; // 현재 학교 정보
}

// Action types
interface Actions {
  setUniv: (newUniv: string) => void; // 상태를 업데이트하는 액션 추가
  setIsLoggedIn: (status: boolean) => void; // 로그인 상태 업데이트
}

// useSchoolStore
const useUnivStore = create<States & Actions>((set) => ({
  // States
  // TODO : 로그인 한 경우 - 회원가입시의 학교 기준
  // TODO : 로그인 안 한 경우 - onboarding에서 선택한 학교 기준
  isLoggedIn: false, // 기본값은 비로그인 상태
  univ: '서강대학교',

  // Actions
  setIsLoggedIn: (status) => set(() => ({ isLoggedIn: status })),
  setUniv: (newUniv) => set(() => ({ univ: newUniv })), // 상태 업데이트 로직
  // decrease: () => set((state) => ({ school: state.school - 1 })),
}));

export default useUnivStore;
