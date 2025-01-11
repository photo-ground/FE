export type School = {
  name: string;
  lat: number;
  lng: number;
};

export interface DrawerProps {
  // title: string;
  // src: string;
  toggleDrawer: (isOpen: boolean) => void; // 매개변수를 받도록 타입 변경
  toggleModal: (postId: number) => void;
  // setSpotId: (postId: number) => void;
}

export interface spotPostImageProps {
  imageId: number;
  imageUrl: string;
  postId: number;
  photographerName: string;
}

export interface photoSpotProps {
  spotId: number;
  spotName: string;
  content: string;
  imageInfo: {
    spotPostImageList: spotPostImageProps[];
    hasNext: boolean;
  };
}

export interface postListProps {
  id: number;
  photographerId: number;
  photographerName: string;
  firstImageUrl: string;
  firstImageSpot: string;
  createdAt: string;
}
export interface postByUnivProps {
  postList: postListProps[];
  hasNext: boolean;
}
