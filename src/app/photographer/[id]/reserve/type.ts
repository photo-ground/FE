import { NullableUniversity } from '@/types/university';

export interface ReserveData {
  univName: NullableUniversity;
  reserveNum: number;
  date: Date | null;
  startTime: number | null;
  requirement: string;
  price: number;
}
