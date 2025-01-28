import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UnivValue } from '@/types/univOption';

// todo 옮기기
export type Role = 'ROLE_CUSTOMER' | 'ROLE_PHOTOGRAPHER';

interface States {
  isLoggedIn: boolean;
  univ: UnivValue;
  role: Role;
  token: string | null;
  photographerId: number | null;
}

interface Actions {
  setIsLoggedIn: (state: boolean) => void;
  setUniv: (newUniv: UnivValue) => void;
  setRole: (newRole: Role) => void;
  setToken: (newToken: string) => void;
  setPhotographerId: (newId: number) => void;
}

const useUserStore = create(
  persist<States & Actions>(
    (set) => ({
      isLoggedIn: false, // 기본값은 비로그인 상태
      univ: '서강대학교', // 기본값은 서강대학교
      role: 'ROLE_CUSTOMER', // 기본값은 고객
      token: null,
      photographerId: null,

      setIsLoggedIn: (state) => set(() => ({ isLoggedIn: state })),
      setUniv: (newUniv) => set(() => ({ univ: newUniv })),
      setRole: (newRole) => set(() => ({ role: newRole })),
      setToken: (newToken: string) => set(() => ({ token: newToken })),
      setPhotographerId: (newId: number) =>
        set(() => ({ photographerId: newId })),
    }),
    {
      name: 'photo-ground-user', // 로컬스토리지 키 이름
    },
  ),
);

export default useUserStore;
