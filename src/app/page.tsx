'use client';

import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      main page
      <Title>red</Title>
    </div>
  );
}
