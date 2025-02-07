type PhotographerName = string;
type PhotographerId = number;
type Age = number;
type Gender = 'FEMALE' | 'MALE';
type ProfileUrl = string;

export interface Photographer {
  photographerName: PhotographerName;
  photographerId: PhotographerId;
  age: Age;
  gender: Gender;
  profileUrl: ProfileUrl;
}
export interface PhotographerList {
  photographerList: Photographer[];
  hasNext: boolean;
}
