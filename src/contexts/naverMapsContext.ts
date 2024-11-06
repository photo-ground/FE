import { createContext, useContext } from 'react';

// export type NaverMap = typeof naver.maps;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NaverMapType = any;

export const NaverMapsContext = createContext<NaverMapType | undefined>(
  undefined,
);

export const useNaverMapsContext: () => NaverMapType | undefined = () =>
  useContext(NaverMapsContext);
