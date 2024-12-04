import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

import './card.css';

export interface CardProps {
  /** How large should the card be? */
  size?: 'small' | 'medium' | 'large';
  /** What card image to use */
  src: string;
  /** Card Title */
  title?: string;
  /** Card Content */
  content?: string;
  /** Optional click handler */
  onClick?: () => void;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardImage = styled.img`
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const CardContent = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Card({
  size,
  src,
  title,
  content,
  onClick,
}: CardProps) {
  return (
    <CardWrapper onClick={onClick} className={`card ${size}`}>
      <CardImage src={src} alt={title} />
      <Text variant="body1_md">{title}</Text>
      <CardContent variant="body3">{content}</CardContent>
    </CardWrapper>
  );
}
