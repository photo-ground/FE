export interface Reservation {
  reservationId: number;
  photographerName: string;
  profileImage: string;
  univName: '연세대학교';
  bookingNum: 1;
  status: '예약취소' | '예약대기';
  price: number;
  date: string;
  startTime: string;
  chatUrl: string | null;
}
