import LatLng from './latlng';

declare namespace naver {
  namespace maps {
    class Map {
      constructor(
        element: HTMLElement,
        options: { center: LatLng; zoom: number },
      );
    }
  }
}
