import { Gender } from './gender';
import { University } from './university';

export const enum Role {
  CUSTOMER = 'ROLE_CUSTOMER',
  PHOTOGRAPHER = 'ROLE_PHOTOGRAPHER',
}

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
