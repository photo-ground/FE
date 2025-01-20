export interface PostListProps {
  id: number;
  photographerId: number;
  photographerName: string;
  firstImageUrl: string;
  firstImageSpot: string;
  createdAt: string;
}
export interface PostProps {
  postList: PostListProps[];
  hasNext: boolean;
}

export interface PostInfoProps {
  univId: number;
  content: string;
  spotIds: number[];
}
export interface PostUploadContainerProps {
  postInfo: PostInfoProps;
  photos: File[]; // 업로드할 파일 배열
}
