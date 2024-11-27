'use client';

import Button from '@/components/atoms/Button';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Button.Small.Primary text="팔로우" />
      <Button.Small.Primary text="팔로우" disabled />
      <Button.Small.Secondary text="팔로우" />
      <Button.Small.Tertiary text="팔로우" />
    </div>
  );
}
