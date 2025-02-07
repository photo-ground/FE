import { Gender } from './gender';

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
