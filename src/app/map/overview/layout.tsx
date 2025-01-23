'use client';

import { ReactNode } from 'react';

export default function ModalLayout({
  children,
  // modal,
}: {
  children: ReactNode;
  // modal: ReactNode;
}) {
  return (
    <div id="modal-root">
      {/* {modal} */}
      {children}
    </div>
  );
}
