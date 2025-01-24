export interface ReviewItemProps {
  reviewId: number;
  reservationId: number;
  photographerProfile: string;
  photographerName: string;
  content: string;
  score: number;
  createdAt: string;
}

export interface ReviewsProps {
  count: number;
  averageScore: number;
  reviews: ReviewItemProps[];
}
