import refreshAccessToken from './refreshToken';

export default async function fetchWithAuth(
  url: string,
  // eslint-disable-next-line
  options: any = {},
) {
  const accessToken = localStorage.getItem('accessToken');

  const defaultHeaders = {
    Authorization: `${accessToken}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...defaultHeaders, ...options.headers },
    });

    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken();
      const newHeaders = {
        Authorization: `${newAccessToken}`,
        'Content-Type': 'application/json',
      };

      return fetch(url, {
        ...options,
        headers: { ...newHeaders, ...options.headers },
      });
    }

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (error) {
    console.error('요청 오류:', error);
    throw error;
  }
}
