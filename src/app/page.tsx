'use client';

import Button from '@/components/atoms/Button';
import Tag from '@/components/atoms/Tag';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Button.Small.Primary text="팔로우" />
      <Button.Small.Primary text="팔로우" disabled />
      <Button.Small.Secondary text="팔로우" />
      <Button.Small.Tertiary text="팔로우" />

      <Tag text="세련된" variant="primary" />
      <Tag text="세련된" variant="secondary" />
    </div>
  );
}
