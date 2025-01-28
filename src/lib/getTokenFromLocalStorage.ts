// 로컬스토리지에서 univ 값을 가져오는 함수
export default function getTokenFromLocalStorage() {
  const userData = localStorage.getItem('photo-ground-user'); // 로컬스토리지에서 데이터 가져오기
  if (userData) {
    try {
      const parsedData = JSON.parse(userData); // JSON 파싱
      return parsedData.state?.token || null; // univ 값 반환
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return null; // 파싱 실패 시 null 반환
    }
  }
  return null; // 데이터가 없을 경우 null 반환
}
