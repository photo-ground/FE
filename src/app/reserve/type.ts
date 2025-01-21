export interface Schedule {
  chatUrl: string;
  date: string;
  photographerName: string;
  reservationId: number;
  reserveNum: number;
  startTime: string;
  university: string;
}

export interface ReservationInfo {
  dateSchedules: Schedule[];
  reserveDates: string[];
  upcomingSchedule: Schedule;
}
