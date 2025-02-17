import { PhotographerId, PhotographerName } from '@/types/photographer';

export type PostId = number;

export interface Post {
  id: PostId;
  photographerId: PhotographerId;
  photographerName: PhotographerName;
  firstImageUrl: string;
  firstImageSpot: string;
  createdAt: string;
}

export interface PostList {
  postList: Post[];
  hasNext: boolean;
}

export interface PostSummary {
  postId: PostId;
  firstImageUrl: string;
}

export interface PostInfo {
  univId: number;
  content: string;
  spotIds: number[];
}

export interface PostUploading {
  postInfo: PostInfo;
  photos: File[]; // 업로드할 파일 배열
}
