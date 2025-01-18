export interface Option {
  value: string;
  label: string;
}
export const UNIV_LIST: Option[] = [
  { value: '서강', label: '서강대학교' },
  { value: '연세', label: '연세대학교' },
  { value: '이화', label: '이화여자대학교' },
  { value: '홍익', label: '홍익대학교' },
];

export type UnivValue = (typeof UNIV_LIST)[number]['value'];
export type UnivLabel = (typeof UNIV_LIST)[number]['label'];
