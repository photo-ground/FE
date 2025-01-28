import { Suspense } from 'react';

import LoadingPage from '@/components/LoadingPage';
import Main from './Main';

export default function AuthPageWrapper() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Main />
    </Suspense>
  );
}

export const runtime = 'edge';
