import { GenderValue } from '@/types/genderOption';
import { UnivValue } from '@/types/univOption';

interface FilterOption {
  univ: UnivValue | null;
  gender: GenderValue | null;
  cursor: number | null;
}

export interface PhotographerSummary {
  photographerName: string;
  photographerId: number;
  age: number;
  gender: 'MALE' | 'FEMALE';
  profileUrl: string;
}

const createSearchParams = ({ univ, gender, cursor }: FilterOption) => {
  const params = new URLSearchParams();

  if (univ) {
    params.append('univ', univ);
  }
  if (gender) {
    params.append('gender', gender);
  }
  if (cursor) {
    params.append('cursor', cursor.toString());
  }

  return params.toString();
};

export default async function getPhotographerList({
  univ,
  gender,
  cursor,
}: FilterOption) {
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photographer`);
  url.search = createSearchParams({ univ, gender, cursor });

  try {
    const rawResponse = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }

    const response = await rawResponse.json();
    return response;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
}
