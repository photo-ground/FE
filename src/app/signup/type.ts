import { Gender } from '@/types/gender';
import { University } from '@/types/university';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone: string;
  myUniv?: University | '선택안함';
  gender?: Gender;

  isEmailConfirmed: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmed: boolean;
}
