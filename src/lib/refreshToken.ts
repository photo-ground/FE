export default async function refreshAccessToken() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/reissue`,
    {
      method: 'POST',
      credentials: 'include',
    },
  );

  if (!response.ok) {
    throw new Error('access token 재발급에 실패했습니다.');
  }

  const data = await response.json();
  localStorage.setItem('accessToken', data.accessToken);
}
