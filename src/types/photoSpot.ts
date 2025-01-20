export interface SpotPostImageProps {
  imageId: number;
  imageUrl: string;
  postId: number;
  photographerName: string;
}

export interface PhotoSpotProps {
  spotId: number;
  spotName: string;
  content: string;
  imageInfo: {
    spotPostImageList: SpotPostImageProps[];
    hasNext: boolean;
  };
}

export interface PhotoSpotListProps {
  spotId: number;
  spotName: string;
  latitude: number;
  longitude: number;
  spotImageUrl: string;
}

export interface PostListProps {
  id: number;
  photographerId: number;
  photographerName: string;
  firstImageUrl: string;
  firstImageSpot: string;
  createdAt: string;
}
export interface PostByUnivProps {
  postList: PostListProps[];
  hasNext: boolean;
}
