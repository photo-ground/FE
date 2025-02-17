export const enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
}

export type NullableGender = Gender | null;

export interface GenderOption {
  value: Gender;
  label: string;
}

export const GENDER_LIST: readonly GenderOption[] = [
  { value: Gender.Male, label: '남성' },
  { value: Gender.Female, label: '여성' },
] as const;
