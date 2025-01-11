import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

import './card.css';

export interface CardProps {
  /** How large should the card be? */
  size?: 'round' | 'small' | 'medium' | 'large' | 'dynamic';
  /** What card image to use */
  src: string;
  /** Card Title */
  title?: string;
  /** Card Content */
  content?: string;
  /** Optional click handler */
  onClick?: () => void;
  etc?: React.ReactNode;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardTitle = styled(Text)`
  margin-top: 0.75rem;
`;

const CardImage = styled.img`
  object-fit: cover;
  border-radius: 0.125rem;
`;

const CardContent = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function Card({
  size,
  src,
  title,
  content,
  etc, // 제 3의 디자인..이 나오는 경우 활용
  onClick,
}: CardProps) {
  return (
    <CardWrapper onClick={onClick} className={`card ${size}`}>
      <CardImage src={src} alt={title} />
      {title && <CardTitle variant="body1_md">{title}</CardTitle>}
      {content && <CardContent variant="body3">{content}</CardContent>}
      {etc}
    </CardWrapper>
  );
}
