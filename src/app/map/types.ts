import { PhotoSpotProps } from '@/types/photoSpot';

export type School = {
  name: string;
  lat: number;
  lng: number;
};

export interface DrawerProps {
  photoSpotData: PhotoSpotProps | null;
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
  toggleModal: (modalOpen: boolean) => void;
}
