export interface UnivOption {
  value: string;
  label: string;
  univId: number;
}
export const UNIV_LIST: UnivOption[] = [
  { value: '서강대학교', label: '서강대학교', univId: 3 },
  { value: '연세대학교', label: '연세대학교', univId: 1 },
  { value: '이화여자대학교', label: '이화여자대학교', univId: 2 },
  { value: '홍익대학교', label: '홍익대학교', univId: 4 },
];

export type UnivValue = (typeof UNIV_LIST)[number]['value'];
export type UnivLabel = (typeof UNIV_LIST)[number]['label'];
