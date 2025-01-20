export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone: string;
  myUniv?:
    | '서강대학교'
    | '연세대학교'
    | '이화여자대학교'
    | '홍익대학교'
    | '선택안함';
  gender?: 'FEMALE' | 'MALE';

  isEmailConfirmed: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmed: boolean;
}
