import { createContext, useContext } from 'react';
import { NaverMapType } from './naverMapsContext';

type MapContext = {
  map: NaverMapType | undefined;
} | null;

export const NaverMapContext = createContext<MapContext>(null);

export const useNaverMapContext: () => MapContext = () =>
  useContext(NaverMapContext);
