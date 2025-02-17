import { PhotographerName } from '@/types/photographer';

export interface ReviewDetail {
  reviewId: number;
  reservationId: number;
  photographerProfile: string;
  photographerName: PhotographerName;
  content: string;
  score: number;
  createdAt: string;
}

export interface ReviewList {
  count: number;
  averageScore: number;
  reviews: ReviewDetail[];
}
