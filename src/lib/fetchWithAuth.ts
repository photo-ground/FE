import refreshAccessToken from './refreshToken';

export default async function fetchWithAuth(
  url: string,
  // eslint-disable-next-line
  options: any = {},
) {
  const defaultHeaders = {
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

    return response;
  } catch (error) {
    if (typeof document !== 'undefined') {
      document.cookie.split(';').forEach((c) => {
        if (c.trim().startsWith('accessToken=')) {
          document.cookie =
            'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      });
    }

    console.error('요청 오류:', error);
    throw error;
  }
}
