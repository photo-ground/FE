// public/naver-maps.js

export const loadNaverMap = (clientId: string, callback: () => void) => {
  const existingScript = document.getElementById('naver-map-script');

  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.id = 'naver-map-script';
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.onload = callback;
    document.head.appendChild(script);
  } else if (callback) {
    callback();
  }
};

export default loadNaverMap;
