import { PostId } from './post';

export interface SpotPostImageProps {
  imageId: number;
  imageUrl: string;
  postId: PostId;
  photographerName: string;
}

export interface SpotPostImageMetaProps {
  spotPostImageProps: SpotPostImageProps[];
  spotName: string;
  univ: string;
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
