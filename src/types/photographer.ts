import { Gender } from '@/types/gender';
import { University } from '@/types/university';

export type PhotographerName = string;
export type PhotographerId = number;
export type Age = number;
export type ProfileUrl = string;

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

export interface PhotographerSummary {
  photographerName: PhotographerName;
  photographerId: PhotographerId;
  age: Age;
  gender: Gender;
  profileUrl: ProfileUrl;
}

export interface PhotographerDetail {
  photographerName: PhotographerName;
  followerNum: number;
  gender: Gender;
  age: Age;
  univ: University[];
  price: number;
  addPrice: number;
  introduction: string;
  styleList: string[];
  following: boolean;
  profileUrl: ProfileUrl;
}

export interface PhotographerFollowing {
  photographerId: PhotographerId;
  photographerName: PhotographerName;
  profileUrl: ProfileUrl;
}
