export type School = {
  name: string;
  lat: number;
  lng: number;
};

export interface DrawerProps {
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
  toggleModal: (postId: number) => void;
}
