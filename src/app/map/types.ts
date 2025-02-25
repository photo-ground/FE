import { PhotoSpotPostList } from '@/types/photoSpot';
import { University } from '@/types/university';

export type School = {
  name: University;
  lat: number;
  lng: number;
};

export interface DrawerProps {
  photoSpotData: PhotoSpotPostList | null;
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
  toggleModal: (modalOpen: boolean) => void;
}
