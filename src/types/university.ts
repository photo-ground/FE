export const enum University {
  Sogang = '서강대학교',
  Yonsei = '연세대학교',
  Ewha = '이화여자대학교',
  Hongik = '홍익대학교',
  None = '해당없음',
}

export type NullableUniversity = University | null;

export interface UnivOption {
  value: University;
  label: string;
}

export const UNIV_LIST: readonly UnivOption[] = [
  { value: University.Sogang, label: University.Sogang },
  { value: University.Yonsei, label: University.Yonsei },
  { value: University.Ewha, label: University.Ewha },
  { value: University.Hongik, label: University.Hongik },
] as const;

export interface UnivSelectionOption {
  value: University | '선택안함';
  label: string | '선택 안 함';
}

export const UNIV_SELECTION_LIST: UnivSelectionOption[] = [
  { value: University.Sogang, label: University.Sogang },
  { value: University.Yonsei, label: University.Yonsei },
  { value: University.Ewha, label: University.Ewha },
  { value: University.Hongik, label: University.Hongik },
  { value: '선택안함', label: '선택 안 함' },
];

export interface PostUnivOption {
  value: University;
  label: string;
  univId: number; // 백엔드에 univId 제거 요청 예정
}

export const POST_UNIV_LIST: readonly PostUnivOption[] = [
  { value: University.Sogang, label: University.Sogang, univId: 1 },
  { value: University.Yonsei, label: University.Yonsei, univId: 2 },
  { value: University.Ewha, label: University.Ewha, univId: 3 },
  { value: University.Hongik, label: University.Hongik, univId: 4 },
  { value: University.None, label: University.None, univId: 5 },
] as const;
