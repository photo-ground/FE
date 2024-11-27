'use client';

import MediumButton from '@/components/atoms/MediumButton';
import SmallButton from '@/components/atoms/SmallButton';
import Tag from '@/components/atoms/Tag';
import React from 'react';

export default function Home() {
  return (
    <div>
      <SmallButton.Primary text="팔로우" />
      <SmallButton.Primary text="팔로우" disabled />
      <SmallButton.Secondary text="팔로우" />
      <SmallButton.Tertiary text="팔로우" />

      <Tag text="세련된" variant="primary" />
      <Tag text="세련된" variant="secondary" />

      <MediumButton text="스냅 전체보기" variant="primary" />
      <MediumButton text="스냅 전체보기" variant="secondary" />
    </div>
  );
}
