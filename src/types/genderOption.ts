export interface GenderOption {
  value: string;
  label: string;
}

export const GENDER_LIST: GenderOption[] = [
  { value: 'MALE', label: '남성' },
  { value: 'FEMALE', label: '여성' },
];

export type GenderValue = (typeof GENDER_LIST)[number]['value'];
export type GenderLabel = (typeof GENDER_LIST)[number]['label'];
