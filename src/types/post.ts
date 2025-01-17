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
