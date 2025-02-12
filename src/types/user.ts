import { Gender } from '@/types/gender';
import { University } from '@/types/university';

export const enum Role {
  Customer = 'ROLE_CUSTOMER',
  Photographer = 'ROLE_PHOTOGRAPHER',
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
