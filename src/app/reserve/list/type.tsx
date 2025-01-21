export type ReserveStatus =
  | '예약취소'
  | '예약대기'
  | '결제대기'
  | '결제확인'
  | '결제오류'
  | '예약확정'
  | '촬영완료';

export interface Reservation {
  reservationId: number;
  photographerName: string;
  profileImage: string;
  univName: '연세대학교';
  bookingNum: 1;
  status: ReserveStatus;
  price: number;
  date: string;
  startTime: string;
  chatUrl: string | null;
}
