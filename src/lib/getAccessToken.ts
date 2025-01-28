export default function getAccessToken() {
  return (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1] || ''
  );
}
