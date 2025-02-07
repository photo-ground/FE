export const UNIVERSITY = {
  SOGANG: '서강대학교',
  YONSEI: '연세대학교',
  EWHA: '이화여자대학교',
  HONGIK: '홍익대학교',
} as const;

export type University = (typeof UNIVERSITY)[keyof typeof UNIVERSITY];
export type NullableUniversity = University | null;
