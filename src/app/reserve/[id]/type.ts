import { ReserveStatus } from '../list/type';

export interface ReserveDetail {
  date: string;
  photographerName: string;
  photographerProfileUrl: string;
  requirement: string;
  reserveNum: number;
  startTime: string;
  status: ReserveStatus;
  univName: '서강대학교' | '연세대학교' | '이화여자대학교' | '홍익대학교';
}
