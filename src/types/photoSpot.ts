import { PhotographerName } from '@/types/photographer';
import { PostId } from '@/types/post';

export type SpotId = number;
export type SpotName = string;

export interface PhotoSpot {
  spotId: SpotId;
  spotName: SpotName;
  latitude: number;
  longitude: number;
  spotImageUrl: string;
}

export interface PhotoSpotPost {
  imageId: number;
  imageUrl: string;
  postId: PostId;
  photographerName: PhotographerName;
}

export interface PhotoSpotPostList {
  spotId: SpotId;
  spotName: SpotName;
  content: string;
  imageInfo: {
    spotPostImageList: PhotoSpotPost[];
    hasNext: boolean;
  };
}
