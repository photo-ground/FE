import { SignUpData } from './type';

interface Error {
  message?: string;
}

export default async function signup({ data }: { data: SignUpData }) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/join`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (rawResponse.ok) {
      return true;
    }

    const response = await rawResponse.json();
    throw new Error(response.message);
  } catch (error: unknown) {
    console.error((error as Error).message || '문제가 발생했습니다.');
    return false;
  }
}
