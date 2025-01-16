export interface UnivOption {
  value: string;
  label: string;
}
export const UNIV_LIST: UnivOption[] = [
  { value: 'sogang', label: '서강대학교' },
  { value: 'yonsei', label: '연세대학교' },
  { value: 'ewha', label: '이화여자대학교' },
  { value: 'hongik', label: '홍익대학교' },
];

export type UnivValue = (typeof UNIV_LIST)[number]['value'];
export type UnivLabel = (typeof UNIV_LIST)[number]['label'];
