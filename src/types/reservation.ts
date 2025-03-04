import { PhotographerName, ProfileUrl } from './photographer';
import { University } from './university';

// export type ReservationStatus =
//   | '예약취소'
//   | '예약대기'
//   | '결제대기'
//   | '결제확인'
//   | '결제오류'
//   | '예약확정'
//   | '촬영완료';

export type ReservationStatus =
  | '예약취소'
  | '결제오류'
  | '예약신청'
  | '결제대기'
  | '결제확인'
  | '예약확정'
  | '촬영진행'
  | '보정본전달및스냅종료';

export interface ReservationSummary {
  reservationId: number;
  photographerName: PhotographerName;
  profileImage: ProfileUrl;
  univName: University;
  bookingNum: string;
  status: ReservationStatus;
  price: number;
  date: string;
  startTime: string;
  chatUrl: string | null;
  canceledReason: string;
}

export interface ReservationDetail {
  date: string;
  photographerName: PhotographerName;
  photographerProfileUrl: string;
  requirement: string;
  reserveNum: number;
  startTime: string;
  status: ReservationStatus;
  univName: University;
}
