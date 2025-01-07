export interface SignUpData {
  email?: string;
  password?: string;
  name?: string;
  phone?: number;
  myUniv?: '서강' | '연세' | '이화' | '홍익';
  gender?: 'FEMALE' | 'MALE';

  isEmailConfirmed: boolean;
}
