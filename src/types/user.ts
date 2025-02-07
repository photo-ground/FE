import { University } from './university';

export const ROLE = {
  CUSTOMER: 'ROLE_CUSTOMER',
  PHOTOGRAPHER: 'ROLE_PHOTOGRAPHER',
} as const;

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const;

export type Gender = (typeof GENDER)[keyof typeof GENDER];
export type Role = (typeof ROLE)[keyof typeof ROLE];

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  univ: University;
  role: Role;
}

// todo: fix this
export interface UpdateUserInfoProps {
  name: string;
  phone: string;
  myUniv: string;
  gender: string;
}
