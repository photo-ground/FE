export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone: string;
  myUniv?: '서강' | '연세' | '이화' | '홍익' | '선택안함';
  gender?: 'FEMALE' | 'MALE';

  isEmailConfirmed: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmed: boolean;
}
