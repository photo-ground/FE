export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];
export type NullableGender = Gender | null;

export interface GenderOption {
  value: Gender;
  label: string;
}

export const GENDER_LIST: GenderOption[] = [
  { value: GENDER.MALE, label: '남성' },
  { value: GENDER.FEMALE, label: '여성' },
];
