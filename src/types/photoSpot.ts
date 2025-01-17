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
