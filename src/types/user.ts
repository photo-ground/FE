import { Gender } from './gender';
import { University } from './university';

export const ROLE = {
  CUSTOMER: 'ROLE_CUSTOMER',
  PHOTOGRAPHER: 'ROLE_PHOTOGRAPHER',
} as const;

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
