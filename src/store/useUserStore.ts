import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Role } from '@/types/user';
import { University } from '@/types/university';

interface States {
  isLoggedIn: boolean;
  univ: University;
  role: Role;
  photographerId: number | null;
}

interface Actions {
  setIsLoggedIn: (state: boolean) => void;
  setUniv: (newUniv: University) => void;
  setRole: (newRole: Role) => void;
  setPhotographerId: (newId: number) => void;
}

const useUserStore = create(
  persist<States & Actions>(
    (set) => ({
      isLoggedIn: false, // 기본값은 비로그인 상태
      univ: '서강대학교', // 기본값은 서강대학교
      role: Role.CUSTOMER, // 기본값은 고객
      photographerId: null,

      setIsLoggedIn: (state) => set(() => ({ isLoggedIn: state })),
      setUniv: (newUniv) => set(() => ({ univ: newUniv })),
      setRole: (newRole) => set(() => ({ role: newRole })),
      setPhotographerId: (newId: number) =>
        set(() => ({ photographerId: newId })),
    }),
    {
      name: 'photo-ground-user', // 로컬스토리지 키 이름
    },
  ),
);

export default useUserStore;
