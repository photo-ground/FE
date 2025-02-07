export const UNIVERSITY = {
  SOGANG: '서강대학교',
  YONSEI: '연세대학교',
  EWHA: '이화여자대학교',
  HONGIK: '홍익대학교',
} as const;

export type University = (typeof UNIVERSITY)[keyof typeof UNIVERSITY];
export type NullableUniversity = University | null;

export interface UnivOption {
  value: University;
  label: string;
  univId: number;
}

export const UNIV_LIST: UnivOption[] = [
  { value: UNIVERSITY.SOGANG, label: UNIVERSITY.SOGANG, univId: 1 },
  { value: UNIVERSITY.YONSEI, label: UNIVERSITY.YONSEI, univId: 2 },
  { value: UNIVERSITY.EWHA, label: UNIVERSITY.EWHA, univId: 3 },
  { value: UNIVERSITY.HONGIK, label: UNIVERSITY.HONGIK, univId: 4 },
];
