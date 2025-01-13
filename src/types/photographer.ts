export interface PhotographerListProps {
  photographerName: string;
  photographerId: number;
  age: number;
  gender: string;
  profileUrl: string;
}
export interface PhotographerProps {
  photographerList: PhotographerListProps[];
  hasNext: boolean;
}

export interface PhotographerSearchProps {
  photographerList: PhotographerListProps[];
  hasNext: boolean;
  nextCursor: string;
}

export interface PhotographerProfileProps {
  photographerName: string;
  age: number;
  gender: string;
  followerNum: number;
  price: number;
  addPrice: number;
  // univ: Array<Univ>,
  profileUrl: string;
}
