export default async function signin(formData: FormData) {
  try {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      },
    );

    const accessToken = rawResponse.headers.get('Authorization')!;
    localStorage.setItem('accessToken', accessToken);
    document.cookie = `accessToken=${accessToken}; Path=/;`;

    if (!rawResponse.ok) {
      const response = await rawResponse.json();
      throw new Error(response.message);
    }
  } catch (error: unknown) {
    console.error(error);
    console.error((error as Error).message || '문제가 발생했습니다.');
  }
}
