export interface photographerListProps {
  photographerName: string;
  photographerId: number;
  age: number;
  gender: string;
  profileUrl: string;
}
export interface photographerProps {
  photographerList: photographerListProps[];
  hasNext: boolean;
}

export interface photographerSearchProps {
  photographerList: photographerListProps[];
  hasNext: boolean;
  nextCursor: string;
}

export interface photographerProfileProps {
  photographerName: string;
  age: number;
  gender: string;
  followerNum: number;
  price: number;
  addPrice: number;
  // univ: Array<Univ>,
  profileUrl: string;
}
