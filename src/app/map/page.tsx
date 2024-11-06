'use client';

import { useCallback } from 'react';

import { UNIV_COORDS } from '@/constants/map';

import MapEvent from './components/MapEvent';
import Marker from './components/Marker';
import NaverMap from './components/NaverMap';
import NaverMapsProvider from './components/NaverMapsProvider';

export default function MapPage() {
  // [todo] remove this
  const onClick = useCallback((event: Event) => {
    console.log(event);
  }, []);

  return (
    <NaverMapsProvider>
      <NaverMap position={UNIV_COORDS.SOGANG}>
        <Marker position={UNIV_COORDS.SOGANG} />
        <MapEvent eventType="click" callback={onClick} />
      </NaverMap>
    </NaverMapsProvider>
  );
}
