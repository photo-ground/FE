export type School = {
  name: string;
  lat: number;
  lng: number;
};

export interface DrawerProps {
  // title: string;
  // src: string;
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
}

export interface spotPostImageProps {
  imageId: number;
  imageUrl: string;
  postId: number;
  photographerName: string;
}

export interface photoSpotProps {
  imageInfo: {
    spotPostImageList: spotPostImageProps[];
    hasNext: boolean;
  };
}
