import { Suspense } from 'react';

import Main from './Main';

export default function AuthPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  );
}
